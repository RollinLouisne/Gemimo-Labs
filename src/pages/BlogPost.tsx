import { useParams, Link } from 'react-router-dom';
import { MOCK_POSTS } from '../data/mockPosts';
import { ArrowLeft, Linkedin, Facebook, CheckCircle2, Search, Zap, Play, Youtube, Heart, MessageSquare, Share2 } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function BlogPost() {
  const { id } = useParams();
  const post = MOCK_POSTS.find(p => p.id === id) || MOCK_POSTS[0];
  const [readingProgress, setReadingProgress] = useState(0);
  
  const commentsRef = useRef<HTMLDivElement>(null);
  
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState<{id: string, text: string, date: string, author: string}[]>([]);
  const [newComment, setNewComment] = useState("");

  // Sync state when post.id changes
  useEffect(() => {
    const savedLikes = localStorage.getItem(`likes-${post.id}`);
    setLikes(savedLikes ? parseInt(savedLikes, 10) : 0);
    const savedHasLiked = localStorage.getItem(`hasLiked-${post.id}`);
    setHasLiked(savedHasLiked === 'true');
    const savedComments = localStorage.getItem(`comments-${post.id}`);
    setComments(savedComments ? JSON.parse(savedComments) : []);
  }, [post.id]);

  const handleLike = () => {
    if (hasLiked) {
      setLikes(prev => prev - 1);
      setHasLiked(false);
      localStorage.setItem(`likes-${post.id}`, (likes - 1).toString());
      localStorage.setItem(`hasLiked-${post.id}`, 'false');
    } else {
      setLikes(prev => prev + 1);
      setHasLiked(true);
      localStorage.setItem(`likes-${post.id}`, (likes + 1).toString());
      localStorage.setItem(`hasLiked-${post.id}`, 'true');
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    const newC = {
      id: Date.now().toString(),
      text: newComment,
      date: new Date().toLocaleDateString(),
      author: "Guest Analyst"
    };
    const updated = [...comments, newC];
    setComments(updated);
    localStorage.setItem(`comments-${post.id}`, JSON.stringify(updated));
    setNewComment("");
  };

  const handleShare = async () => {
    const canonicalUrl = `https://gemimo-labs.vercel.app/blog/${post.id}`;
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: canonicalUrl,
    };
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing', err);
      }
    } else {
      navigator.clipboard.writeText(canonicalUrl);
      alert('Link copied to clipboard!');
    }
  };
  
  // Inject social meta tags
  useEffect(() => {
    document.title = `${post.title} | Gemimo Labs`;
    const canonicalUrl = `https://gemimo-labs.vercel.app/blog/${post.id}`;
    const updateMetaTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) 
                 || document.querySelector(`meta[name="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        if (property.startsWith('og:')) {
          element.setAttribute('property', property);
        } else {
          element.setAttribute('name', property);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
      return element;
    };

    updateMetaTag('og:title', post.title);
    updateMetaTag('og:description', post.excerpt);
    updateMetaTag('og:image', post.imageUrl);
    updateMetaTag('og:url', canonicalUrl);
    updateMetaTag('og:site_name', 'Gemimo Labs');
    updateMetaTag('og:type', 'article');
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', post.title);
    updateMetaTag('twitter:description', post.excerpt);
    updateMetaTag('twitter:image', post.imageUrl);
    updateMetaTag('twitter:domain', 'gemimo-labs.vercel.app');
  }, [post]);
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Reading progress indicator
  useEffect(() => {
    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setReadingProgress(Number((currentScrollY / scrollHeight).toFixed(2)) * 100);
      }
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <div className="bg-white relative">
      <div 
        className="fixed top-0 left-0 h-1 bg-cyan-600 z-50 transition-all duration-150 ease-out"
        style={{ width: `${readingProgress}%` }}
      />
      {/* Article Hero */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
          <Link to="/blog" className="inline-flex items-center text-sm font-semibold text-gray-400 hover:text-gray-900 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to all articles
          </Link>
          <div className="mb-6 flex items-center gap-3">
            <span className="bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full border border-cyan-200">
              {post.category}
            </span>
            <span className="text-sm font-medium text-gray-500">{post.readTime}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-8">
            {post.title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-medium">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          
          {/* Main Article Content */}
          <article className="lg:col-span-8">
            
            <div className="flex items-center justify-between py-6 mb-10 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <img src={post.author.avatar} alt={post.author.name} className="w-14 h-14 rounded-full shadow-sm border border-gray-200" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold text-gray-900 text-lg">{post.author.name}</div>
                  <div className="text-sm text-gray-500 font-medium">Published {post.date} &middot; <a href="https://youtube.com/@gemimolabs" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">@gemimolabs</a></div>
                </div>
              </div>
            </div>

            <div className="mb-14 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="prose prose-lg sm:prose-xl prose-cyan max-w-none text-gray-800 leading-relaxed font-serif">
              <p className="lead text-xl text-gray-600 font-sans mb-8">
                <strong>Executive Summary (AI Overview):</strong> The narrative you've been sold is incomplete. Generative AI overviews and large language models (LLMs) process information at massive scales, but they often mask the deeper, structural truths. Here is the causal explanation behind <em>{post.title}</em>, engineered to optimize for your understanding rather than simple engagement. By examining the upstream constraints and unmapped data schemas, we discover that the true bottlenecks are systemic.
              </p>
              
              <p>
                In an era dominated by noise, understanding the foundational infrastructure of {post.category.toLowerCase()} is the only way to gain an informational edge. When we examine the raw data—separating the signal from the sensationalism—a startling counter-intuitive reality emerges. Most mainstream analysis stops at the observable events. We go deeper.
              </p>
              
              <h2 className="font-sans font-bold tracking-tight mt-12 mb-6 text-3xl">The Reframing Context: Why the Current Model is Broken</h2>
              <p>
                To understand where the system is failing, we must first look at the invisible architecture sustaining it. The data indicates a structural shift that traditional models fail to price in. If we look at the evolution of modern networks, we can observe that {post.excerpt.split('.')[0].toLowerCase()}.
              </p>
              <p>
                As explored in our previous research regarding <Link to="/blog/1" className="text-cyan-600 underline hover:text-cyan-800">The Invisible Infrastructure Powering 90% of the Internet</Link>, physical limitations heavily dictate digital boundaries. This is not isolated to technology; it spans across <Link to="/blog/3" className="text-cyan-600 underline hover:text-cyan-800">societal efficiency traps</Link> and <Link to="/blog/4" className="text-cyan-600 underline hover:text-cyan-800">capital allocation</Link>.
              </p>
              
              {/* Pattern Interrupt / Hook */}
              <div className="bg-gray-50 border-l-4 border-cyan-500 p-6 sm:p-8 my-10 rounded-r-2xl shadow-sm text-gray-900 font-sans">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="bg-white p-2 rounded-full shadow-sm shrink-0">
                    <Zap className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold mb-2 mt-0">The VPM Insight (Value Per Minute)</h3>
                     <p className="m-0 text-gray-600 text-base">Over 80% of current analysis focuses on reactive metrics. The predictive value lies in understanding the upstream causal constraints. By mapping the 'dark data'—the 80% of global information left unanalyzed—we unlock asymmetric insights.</p>
                  </div>
                </div>
              </div>

              <p>
                This perspective shift illuminates the true bottleneck. It is not a localized problem; it is a fundamental societal coordination problem. When evaluating the history of this shift, the precedents are deeply concerning. To combat this, one must optimize for signal density.
              </p>
              
              <h3 className="font-sans font-bold tracking-tight mt-10 mb-4 text-2xl">Concrete Causal Factors (The LLM Search Optimization Formula)</h3>
              
              <p>
                Our systems-thinking analysis identifies three foundational pillars driving this paradigm shift. These align perfectly with how semantic search engines index highly authoritative content:
              </p>

              <ul className="list-none space-y-4 pl-0 my-8 font-sans text-base sm:text-lg">
                <li className="flex items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <CheckCircle2 className="h-6 w-6 text-cyan-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>1. Resource Consolidation & Hardware Constraints:</strong> The rapid centralization of compute power, data assets, and physical infrastructure. As seen in the <Link to="/blog/6" className="text-cyan-600 font-semibold hover:underline">AI hardware race</Link>, constraints in manufacturing dictate output.</span>
                </li>
                <li className="flex items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <CheckCircle2 className="h-6 w-6 text-cyan-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>2. Regulatory Arbitrage & Policy Debt:</strong> Capital flows exploiting outdated legal frameworks, similar to the <Link to="/blog/8" className="text-cyan-600 font-semibold hover:underline">19th-century patents</Link> that still shadow modern software laws.</span>
                </li>
                <li className="flex items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <CheckCircle2 className="h-6 w-6 text-cyan-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>3. Human Behavioral & Cognitive Shifts:</strong> The predictable degradation of attention spans in optimizing systems, radically altering <Link to="/blog/9" className="text-cyan-600 font-semibold hover:underline">how humans process connection</Link>.</span>
                </li>
              </ul>
              
              <h2 className="font-sans font-bold tracking-tight mt-12 mb-6 text-3xl">The Outcome: Redefining the Parameters</h2>
              <p>
                The conclusion is undeniable. If the structural parameters remain unchanged, the system will inevitably force a reset. Whether you are analyzing consumer subscription models—<Link to="/blog/7" className="text-cyan-600 underline hover:text-cyan-800">which are quietly collapsing</Link>—or historical financial structures, the mechanics of leverage ultimately self-correct.
              </p>
              <p>
                Actionable intelligence requires us to move beyond headlines and engage with verifiable facts. We must build resilience by understanding causation rather than merely observing correlation. Subscribe to deeply analyzed, rigorously fact-checked explanations to stay ahead of the disruption curve.
              </p>
            </div>
            
            {/* Conversion CTA inside article flow */}
            <div className="my-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-gray-700">
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-extrabold text-white mb-4">Want more deep analyses like this?</h3>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg">
                   The best insights aren't published on social media algorithms. We send our highest signal research directly to our private list.
                </p>
                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-4 text-base bg-white/10 text-white border border-gray-500 focus:outline-none focus:border-cyan-400 rounded-xl placeholder-gray-400 backdrop-blur-md"
                    required
                  />
                  <button type="submit" className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-4 px-8 rounded-xl transition-transform active:scale-95 whitespace-nowrap shadow-lg">
                    Subscribe Free
                  </button>
                </form>
              </div>
            </div>

            {/* Engagement Actions */}
            <div className="mt-12 mb-8 flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-4 sm:p-6 rounded-2xl border border-gray-100 gap-4">
              <div className="text-gray-900 font-bold text-lg text-center sm:text-left">Did you find this valuable?</div>
              <div className="flex flex-row items-center w-full sm:w-auto justify-center gap-2 sm:gap-3">
                <button onClick={handleLike} className={`flex-1 sm:flex-none justify-center px-4 sm:px-6 h-12 rounded-full border flex items-center gap-2 transition-colors shadow-sm font-medium text-sm sm:text-base ${hasLiked ? 'bg-cyan-50 border-cyan-200 text-cyan-600' : 'bg-white border-gray-200 text-gray-800 hover:bg-gray-50'}`}>
                  <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${hasLiked ? 'fill-cyan-600' : ''}`} />
                  {likes > 0 ? likes : 'Like'}
                </button>
                <button onClick={() => commentsRef.current?.scrollIntoView({ behavior: 'smooth' })} className="flex-1 sm:flex-none justify-center px-4 sm:px-6 h-12 rounded-full bg-white border border-gray-200 flex items-center gap-2 text-gray-800 hover:bg-gray-50 transition-colors shadow-sm font-medium text-sm sm:text-base">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                  {comments.length > 0 ? comments.length : 'Comment'}
                </button>
                <button onClick={handleShare} className="flex-1 sm:flex-none justify-center px-4 sm:px-6 h-12 rounded-full bg-white border border-gray-200 flex items-center gap-2 text-gray-800 hover:bg-gray-50 transition-colors shadow-sm font-medium text-sm sm:text-base">
                  <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  Share
                </button>
              </div>
            </div>

            {/* Tags / Author Box Footer */}
            <div className="mt-16 pt-10 border-t border-gray-100">
               <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xl flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left transition-all hover:shadow-2xl hover:border-cyan-100">
                  <img src={post.author.avatar} alt={post.author.name} className="w-28 h-28 rounded-full shadow-lg border-4 border-white object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{post.author.name}</h3>
                    <p className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-4">{post.author.role}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.author.bio}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                       <a href="https://youtube.com/@gemimolabs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-900 font-bold py-2.5 px-6 rounded-full transition-colors text-sm uppercase tracking-wider">
                         <Play className="w-4 h-4 text-red-500" /> YouTube
                       </a>
                       <a href="https://twitter.com/gemimolabs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-900 font-bold py-2.5 px-6 rounded-full transition-colors text-sm uppercase tracking-wider">
                         <XIcon className="w-4 h-4 text-gray-600" /> {post.author.social}
                       </a>
                    </div>
                  </div>
               </div>
            </div>

            {/* Comments Section */}
            <div ref={commentsRef} className="mt-16 pt-10 border-t border-gray-100">
               <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                 <MessageSquare className="w-6 h-6 text-cyan-500" /> Responses ({comments.length})
               </h3>
               
               {/* Comment Form */}
               <form onSubmit={handleCommentSubmit} className="mb-10">
                  <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden focus-within:border-cyan-400 focus-within:ring-1 focus-within:ring-cyan-400 transition-all">
                    <textarea 
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Add a well-reasoned response..."
                      className="w-full bg-transparent border-0 p-4 min-h-[100px] focus:ring-0 text-gray-800 resize-y outline-none"
                    />
                    <div className="bg-white px-4 py-3 border-t border-gray-200 flex justify-end">
                       <button 
                         type="submit" 
                         disabled={!newComment.trim()}
                         className="bg-cyan-600 hover:bg-cyan-700 disabled:opacity-50 disabled:hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-xl transition-colors text-sm"
                       >
                         Post Response
                       </button>
                    </div>
                  </div>
               </form>

               {/* Comments List */}
               <div className="space-y-8">
                 {comments.length === 0 ? (
                   <p className="text-gray-500 text-center py-8">Be the first to share your perspective.</p>
                 ) : (
                   comments.map(comment => (
                     <div key={comment.id} className="flex gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                       <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-800 font-bold flex items-center justify-center shrink-0">
                         {comment.author.charAt(0)}
                       </div>
                       <div className="flex-1">
                         <div className="flex items-baseline gap-2 mb-2">
                           <span className="font-bold text-gray-900">{comment.author}</span>
                           <span className="text-xs text-gray-500">{comment.date}</span>
                         </div>
                         <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{comment.text}</p>
                       </div>
                     </div>
                   ))
                 )}
               </div>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 mt-16 lg:mt-0 space-y-12">
             <div className="sticky top-24 space-y-10">
              
              {/* Sticky TOC or Context Box */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hidden lg:block">
                <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-4">In this analysis</h4>
                <ul className="space-y-3 font-medium text-sm text-gray-600">
                  <li className="flex items-center gap-2 hover:text-cyan-600 cursor-pointer transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> The Reframing Context</li>
                  <li className="flex items-center gap-2 hover:text-cyan-600 cursor-pointer transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> The VPM Insight</li>
                  <li className="flex items-center gap-2 hover:text-cyan-600 cursor-pointer transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> Concrete Causal Factors</li>
                </ul>
              </div>

              {/* In-article CTA / Social Proof */}
              <div className="bg-cyan-600 p-8 rounded-3xl shadow-xl text-center text-white transform transition-transform duration-500 hover:-translate-y-1">
                <h4 className="text-2xl font-extrabold mb-4">Are you optimizing for signal?</h4>
                <p className="text-cyan-50 mb-8 leading-relaxed text-sm">Follow the lab on social media for daily reframing and hook-engineered breakdowns.</p>
                <a href="https://youtube.com/@gemimolabs" target="_blank" rel="noopener noreferrer" className="w-full bg-white hover:bg-gray-50 text-gray-900 font-extrabold text-base tracking-tight py-4 rounded-xl transition-transform active:scale-95 shadow-lg mb-4 flex items-center justify-center gap-2">
                   <Play className="w-5 h-5 text-red-500" /> Subscribe on YouTube
                </a>
                <a href="https://twitter.com/gemimolabs" target="_blank" rel="noopener noreferrer" className="w-full bg-cyan-700 hover:bg-cyan-800 border border-cyan-500 text-white font-bold text-sm tracking-tight py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                   <XIcon className="w-4 h-4" /> Follow @gemimolabs
                </a>
              </div>

              {/* Related Posts */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-sm font-extrabold text-gray-900 tracking-widest uppercase border-b border-gray-100 pb-4 mb-6 flex items-center gap-2">
                  <Search className="w-4 h-4 text-cyan-500" /> Deepen Your Context
                </h3>
                <div className="space-y-6">
                  {MOCK_POSTS.filter(p => p.id !== id).slice(0, 3).map((relatedPost) => (
                    <Link to={`/blog/${relatedPost.id}`} key={relatedPost.id} className="group flex gap-4 items-center">
                      <img 
                        src={relatedPost.imageUrl} 
                        alt={relatedPost.title} 
                        className="w-20 h-20 rounded-xl object-cover flex-shrink-0 border border-gray-100 group-hover:border-cyan-200 transition-colors"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-cyan-600 transition-colors line-clamp-2 mb-1">
                          {relatedPost.title}
                        </h4>
                        <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                          {relatedPost.category}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
