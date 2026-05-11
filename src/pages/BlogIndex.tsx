import { Link } from 'react-router-dom';
import { MOCK_POSTS, MOCK_CATEGORIES } from '../data/mockPosts';
import { Play } from 'lucide-react';

export default function BlogIndex() {
  const featuredPost = MOCK_POSTS.find(post => post.featured) || MOCK_POSTS[0];
  const remainingPosts = MOCK_POSTS.filter(post => post.id !== featuredPost.id);
  const trendingPosts = [...MOCK_POSTS].reverse().slice(0, 4);

  return (
    <div className="bg-white">
      <div className="bg-gray-50 border-b border-gray-100 py-16">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">Gemimo <span className="text-cyan-600">Labs</span></h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Research-driven explanatory media. We break down the systems governing technology, science, and history to give you an informational edge.</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Featured Section */}
        <div className="mb-20">
          <Link to={`/blog/${featuredPost.id}`} className="group relative block rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 bg-black">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10 opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
            <img 
              src={featuredPost.imageUrl} 
              alt={featuredPost.title}
              className="w-full h-[500px] md:h-[600px] object-cover scale-105 transition-transform duration-1000 ease-out group-hover:scale-100 opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-20">
              <span className="inline-block bg-cyan-600 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full mb-6">
                Featured Analysis &middot; {featuredPost.category}
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl group-hover:text-cyan-50 transition-colors">
                {featuredPost.title}
              </h2>
              <div className="flex flex-wrap items-center text-gray-300 text-sm font-medium gap-3">
                <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-10 h-10 rounded-full border-2 border-cyan-500" referrerPolicy="no-referrer" />
                <span className="text-white font-bold">{featuredPost.author.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                <span>{featuredPost.date}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                <span>{featuredPost.readTime}</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          
          {/* Main Content Area (Latest Articles) */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between border-b-2 border-gray-100 pb-6 mb-12">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">The Latest Research</h3>
            </div>
            
            <div className="space-y-12">
              {remainingPosts.map(post => (
                <article key={post.id} className="group grid sm:grid-cols-12 gap-8 items-center bg-white border border-transparent hover:border-gray-100 rounded-3xl p-4 -mx-4 hover:shadow-xl transition-all duration-300">
                  <div className="sm:col-span-5 rounded-2xl overflow-hidden shadow-md h-[200px] sm:h-[240px]">
                    <Link to={`/blog/${post.id}`} className="block w-full h-full">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                    </Link>
                  </div>
                  <div className="sm:col-span-7 flex flex-col justify-center h-full">
                    <Link to={`/blog?category=${post.category.toLowerCase()}`} className="text-cyan-600 text-xs font-bold uppercase tracking-widest mb-3 hover:text-cyan-800 transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>{post.category}
                    </Link>
                    <Link to={`/blog/${post.id}`}>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 leading-snug transition-colors">
                        {post.title}
                      </h4>
                    </Link>
                    <p className="text-gray-600 text-base mb-5 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-gray-500 text-xs font-bold uppercase tracking-wider gap-2">
                      <span className="text-gray-900">{post.author.name}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-16 pt-8 text-center">
              <button className="bg-gray-50 border border-gray-200 text-gray-900 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-colors shadow-sm active:scale-95">
                Load More Research Archives
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 mt-20 lg:mt-0 space-y-12">
            
            {/* Newsletter widget */}
            <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 text-center shadow-2xl relative overflow-hidden">
               <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-cyan-500 rounded-full opacity-20 blur-3xl"></div>
              <h4 className="text-2xl font-extrabold text-white mb-2 relative z-10">High-Density Intelligence</h4>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed relative z-10">Join thousands receiving our deeply researched, zero-fluff analyses directly to their inbox.</p>
              <form className="flex flex-col gap-3 relative z-10">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-5 py-4 bg-white/10 text-white border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-500 backdrop-blur-sm"
                  required
                />
                <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-xl transition-transform active:scale-95 shadow-[0_0_15px_rgba(8,_145,_178,_0.3)]">
                  Join Free
                </button>
              </form>
            </div>

            {/* Social CTA */}
            <a href="https://youtube.com/@gemimolabs" target="_blank" rel="noopener noreferrer" className="block bg-gray-50 border border-gray-200 p-6 rounded-3xl text-center group hover:border-cyan-300 transition-colors">
               <div className="bg-white w-16 h-16 rounded-full mx-auto flex items-center justify-center shadow-sm border border-gray-100 mb-4 group-hover:scale-110 transition-transform">
                 <Play className="w-8 h-8 text-red-500 ml-1" />
               </div>
               <h4 className="font-bold text-gray-900 text-lg mb-1">Watch the Deep Dives</h4>
               <p className="text-sm text-gray-500">Visual essays and systemic analysis on our YouTube channel @gemimolabs.</p>
            </a>

            {/* Trending section */}
            <div>
              <h3 className="text-sm font-extrabold text-gray-900 tracking-widest uppercase border-b border-gray-100 pb-4 mb-6 flex items-center">
                <span className="w-2 h-2 rounded-full bg-cyan-500 mr-2"></span>
                Most Read Contexts
              </h3>
              <div className="space-y-6">
                {trendingPosts.map((post, i) => (
                  <Link to={`/blog/${post.id}`} key={post.id} className="group flex gap-5 items-start">
                    <span className="text-3xl font-extrabold text-gray-200 group-hover:text-cyan-200 transition-colors font-mono tracking-tighter shrink-0 pt-1">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-gray-900 leading-snug group-hover:text-cyan-600 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="mt-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                        {post.category}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories section */}
            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 hidden sm:block">
              <h3 className="text-sm font-extrabold text-gray-900 tracking-widest uppercase mb-4">
                Research Pillars
              </h3>
              <div className="flex flex-col gap-2">
                {MOCK_CATEGORIES.map(cat => (
                  <Link 
                    key={cat} 
                    to={`/blog?category=${cat.toLowerCase()}`}
                    className="bg-white hover:bg-cyan-50 hover:text-cyan-800 text-gray-700 font-bold py-3 px-4 rounded-xl border border-gray-100 hover:border-cyan-200 transition-all flex items-center justify-between group"
                  >
                    {cat}
                    <span className="text-gray-300 group-hover:text-cyan-500 transition-colors">&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}
