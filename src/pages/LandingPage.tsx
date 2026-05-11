import { ArrowRight, CheckCircle2, TrendingUp, Shield, Zap, Search, Eye, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="bg-white scroll-smooth">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-20 lg:pb-28">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-100 text-cyan-800 font-semibold text-sm mb-6 shadow-sm border border-cyan-200">
              <span className="flex h-2 w-2 rounded-full bg-cyan-600 mr-2 animate-pulse"></span>
              Join a community of critical thinkers
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-8">
              Stop reading the news. <br className="hidden md:block"/>
              <span className="text-cyan-600">Start understanding the systems.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              We decode technology, science, and history into high-density explanations. Pure signal, zero noise. Respecting your intelligence and optimizing for your time.
            </p>
            
            <form id="newsletter" className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 shadow-2xl p-2 bg-white rounded-2xl border border-gray-200 focus-within:border-cyan-400 focus-within:ring-4 focus-within:ring-cyan-50 transition-all">
              <input 
                type="email" 
                placeholder="Enter your email to join..." 
                className="flex-1 px-5 py-4 text-lg focus:outline-none rounded-xl text-gray-900 placeholder-gray-400"
                required
              />
              <button 
                type="submit" 
                className="bg-gray-900 hover:bg-black text-white font-bold py-4 px-8 rounded-xl transition-transform active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg"
              >
                Get Weekly Insights <ArrowRight className="h-5 w-5" />
              </button>
            </form>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500 font-medium italic">
              <span>From facts to people. From business to news. Explained.</span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-gray-300"></span>
              <a href="https://youtube.com/@gemimolabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-red-500 transition-colors">
                <Play className="w-4 h-4" /> Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Value Prop - High Conversion Data-Driven Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3 block">Uncompromising Detail. Zero Noise.</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-6">The Pipeline of Truth</h2>
            <p className="mt-4 text-xl text-gray-600 leading-relaxed">
              We do not optimize for clicks. We optimize for understanding. Our editorial process forces every analysis through a rigorous four-stage framework designed to give you an informational edge.
            </p>
          </div>

          <div className="space-y-24">
            {/* Stage 1 & 2 */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="bg-gray-50 border-l-4 border-cyan-500 p-8 rounded-r-3xl mb-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 text-sm font-bold">1</span>
                    Surprising Facts
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Most analysis confirms what you already suspect. We start by hunting anomalies—counter-intuitive realities that challenge the prevailing narrative and force a hard reset of your perspective.</p>
                </div>
                <div className="bg-white border-l-4 border-gray-300 p-8 rounded-r-3xl mb-8 opacity-80">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 text-sm font-bold">2</span>
                    Reframing Context
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Raw facts are useless without structure. We zoom out historically and systemically, taking subjects you thought you understood and shifting the perspective to reveal the hidden mechanics.</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-100 to-blue-50 rounded-3xl transform rotate-2 opacity-50 -z-10 blur-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop" 
                  alt="Contextual data analysis" 
                  className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3] border border-gray-200"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Stage 3 & 4 */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center flex-col-reverse lg:flex-row-reverse">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop" 
                  alt="Financial and systemic data" 
                  className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3] border border-gray-200"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="bg-white border-l-4 border-gray-300 p-8 rounded-r-3xl mb-8 opacity-80">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 text-sm font-bold">3</span>
                    Concrete Data Points
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">No opinions without proof. We enforce rigorous, research-dense storytelling backed by verifiable primary sources. You don't have to trust us—you just have to trust the math.</p>
                </div>
                <div className="bg-gray-50 border-l-4 border-cyan-500 p-8 rounded-r-3xl mb-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 text-sm font-bold">4</span>
                    Causal Explanations
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">We don't just report what happened. We systematically construct the chain of events, explaining exactly why X inevitably led to Y. This is the ultimate output: predictable, structural clarity.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Feature 1: The Content */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3 block flex items-center gap-2">
                <Shield className="w-4 h-4" /> Script Engineering Framework
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
                Hook, Build, Reframe, Payoff.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Gemimo Labs is not a news outlet. It is not entertainment. It is a structured explanation system—built to convert curiosity into understanding. Every piece of media follows our rigorous narrative framework:
              </p>
              <ul className="space-y-6">
                {[
                  'Disrupt the scroll with surprising, resonant elements.',
                  'Layer facts, data, and causal reasoning in escalating density.',
                  'Introduce perspective shifts to rethink the subject.',
                  'Deliver the insight that justifies the time spent reading.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start bg-white p-4 rounded-xl border border-gray-100 shadow-sm transition-transform hover:scale-[1.02]">
                    <CheckCircle2 className="h-6 w-6 text-cyan-500 mr-4 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-100 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" 
                alt="Research and analysis process" 
                className="rounded-3xl shadow-2xl border border-gray-100 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Preview */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Our Editorials</h2>
              <p className="text-gray-600 text-lg sm:text-xl">Underrepresented fields. Global contexts. Dive into our latest explanatory media.</p>
            </div>
            <Link to="/blog" className="inline-flex text-cyan-600 font-bold hover:text-cyan-800 items-center justify-center gap-2 transition-transform hover:translate-x-1 py-3 px-6 rounded-full bg-cyan-50 hover:bg-cyan-100 shrink-0">
              Explore the Lab <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: 'claude-code-agentic', title: "Why I Believe Claude Code is the Quiet Death of the Junior Developer", cat: "Technology", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop" },
              { id: 'sam-altman-agi-timeline', title: "Sam Altman's Hidden Timeline: What I Discovered Analyzing OpenAI's Compute Accumulation", cat: "Technology", img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000&auto=format&fit=crop" },
              { id: 'notebooklm-learning-collapse', title: "NotebookLM Remastered How I Consume Research. It Also Might Break Academia.", cat: "Science", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop" }
            ].map(post => (
              <Link to={`/blog/${post.id}`} key={post.id} className="group flex flex-col items-start bg-white rounded-3xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-100 overflow-hidden relative">
                <div className="w-full aspect-video overflow-hidden">
                  <img 
                    src={post.img} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest mb-4 block flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                    {post.cat}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug mb-4 group-hover:text-cyan-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2 text-base leading-relaxed">
                    Read the full analysis and discover the deeper causal metrics moving these global narratives.
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center sm:hidden">
             <Link to="/blog" className="inline-flex bg-gray-900 text-white font-bold py-4 px-8 rounded-xl transition-transform active:scale-95 items-center justify-center gap-2 shadow-lg w-full">
              Explore the Lab <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-28 bg-gray-900 border-t border-gray-800 text-center px-4 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500 blur-[100px]"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500 blur-[100px]"></div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-block bg-cyan-900/50 border border-cyan-800 text-cyan-300 font-bold uppercase tracking-widest text-xs px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">Audience Engineered</div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Convert curiosity into <br className="hidden md:block"/><span className="text-cyan-400">understanding.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
            Join thousands of critical thinkers. We filter the noise and deliver high-signal education directly to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-5 py-4 text-lg bg-gray-800/80 text-white border border-gray-700/50 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 rounded-xl placeholder-gray-500 backdrop-blur-sm transition-all"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-transform active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(8,_145,_178,_0.4)]"
              >
                Join the Reading List <ArrowRight className="h-5 w-5" />
              </button>
            </form>
            <p className="mt-6 text-sm text-gray-500">Unsubscribe in one click. Never any spam.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
