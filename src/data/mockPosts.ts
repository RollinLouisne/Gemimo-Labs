import { ReactNode } from 'react';

export interface Author {
  name: string;
  avatar: string;
  bio: string;
  role: string;
  social: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: Author;
  date: string;
  readTime: string;
  imageUrl: string;
  featured?: boolean;
}

const aisha: Author = {
  name: "Aisha Patel",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
  bio: "I spent a decade as a senior data scientist at DeepMind. Now, I break down the obscure architecture of generative AI and large language models so you can actually understand the unseen systems making decisions for you.",
  role: "AI Research Lead",
  social: "@aisha_patel_ai"
};

const marcus: Author = {
  name: "Marcus Chen",
  avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
  bio: "I analyze the physical infrastructure of the digital world. If you want to know how hardware, server architecture, and code interact to shape global tech monopolies, my research is where you start.",
  role: "Systems Architect",
  social: "@marcus_chen_sys"
};

const elena: Author = {
  name: "Elena Rodriguez",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  bio: "Historical context is the ultimate competitive advantage. I specialize in identifying patterns from previous economic and technological revolutions to predict where the current AI explosion is inevitably heading.",
  role: "Tech Historian",
  social: "@elena_history"
};

const david: Author = {
  name: "David Osei",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  bio: "Algorithms don't exist in a vacuum; they restructure our society. I investigate the intersection of human behavior, mass psychology, and optimizing networks to uncover the true cost of connectivity.",
  role: "Behavioral Analyst",
  social: "@davidosei_soc"
};

const sarah: Author = {
  name: "Sarah Jenkins",
  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
  bio: "Former venture capitalist. Instead of chasing Silicon Valley hype, I dismantle business models and financial structures to find out where the true leverage—and real risk—actually lives.",
  role: "Economics Editor",
  social: "@sarah_vc_jenks"
};

const james: Author = {
  name: "James Wilson",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
  bio: "I decode the cutting edge of biological and applied sciences. My goal is to extract actionable health and science data from complex clinical trials, cutting through the noise of wellness trends.",
  role: "Science Director",
  social: "@jwilson_science"
};

export const MOCK_POSTS: Post[] = [
  {
    id: 'claude-code-agentic',
    title: "Why I Believe Claude Code is the Quiet Death of the Junior Developer",
    excerpt: "I’ve spent the last 48 hours letting Anthropics' Claude Code autonomously manage my repository. It didn't just write code; it navigated my file systems, read logs, and self-corrected. Here is my causal breakdown of why agentic AI changes everything.",
    category: "Technology",
    author: aisha,
    date: "May 10, 2026",
    readTime: "12 min read",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 'sam-altman-agi-timeline',
    title: "Sam Altman's Hidden Timeline: What I Discovered Analyzing OpenAI's Compute Accumulation",
    excerpt: "Mainstream media focuses on Altman's quotes. I focused on OpenAI's power grid contracts and GPU acquisitions. What I found contradicts the public timeline for Artificial General Intelligence (AGI).",
    category: "Technology",
    author: marcus,
    date: "May 8, 2026",
    readTime: "14 min read",
    imageUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 'google-ai-studio-stealth',
    title: "How I Use Google AI Studio to Build Enterprise Prototypes in 45 Minutes",
    excerpt: "Most founders waste weeks on boilerplate. I’m going to show you my exact AI SEO and generative architecture framework using Google AI Studio. This is the blueprint for zero-cost rapid deployment.",
    category: "Technology",
    author: aisha,
    date: "May 5, 2026",
    readTime: "9 min read",
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 'manus-ai-agents-economy',
    title: "Manus and the Coming Agentic Economy: Why I Am Restructuring My Portfolio",
    excerpt: "We are moving from LLMs that 'talk' to agents like Manus that 'do'. I analyzed the economic impact of autonomous multi-agent systems executing B2B workflows. The leverage is shifting.",
    category: "Business & Finance",
    author: sarah,
    date: "May 2, 2026",
    readTime: "11 min read",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a223690?q=80&w=2000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 'notebooklm-learning-collapse',
    title: "NotebookLM Remastered How I Consume Research. It Also Might Break Academia.",
    excerpt: "I fed Google's NotebookLM 100 historical PDFs and generated a podcast. The implication? We are approaching the zero-marginal-cost synthesis of human knowledge. Here is why universities should be terrified.",
    category: "Science",
    author: elena,
    date: "April 28, 2026",
    readTime: "10 min read",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 'youtube-ai-search-override',
    title: "I Analyzed YouTube's AI Search Update: The End of Traditional Video SEO",
    excerpt: "YouTube’s newest multimodal AI doesn't rely on tags or titles; it fundamentally 'watches' and indexes the frames. I’ve reverse-engineered the metric that dictates what content survives.",
    category: "Technology",
    author: aisha,
    date: "April 22, 2026",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 'ai-threats-shadow-cybersecurity',
    title: "The AI Threat No One is Discussing: How I Caught Autonomous Phishing Swarms",
    excerpt: "We're distracted by sci-fi scenarios of terminator robots, but the real AI threat is already here. I dug into the logs of a mid-size financial firm and uncovered a self-optimizing malware swarm.",
    category: "Technology",
    author: marcus,
    date: "April 18, 2026",
    readTime: "15 min read",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 'efficiency-trap-society',
    title: "The Efficiency Trap: Why I Stopped Optimizing My Biological Rhythms",
    excerpt: "I tracked every physiological metric for three years: sleep, glucose, HRV. Here is my systems-level explanation of why the pursuit of biological optimization actually triggered a severe cortisol response.",
    category: "Science",
    author: james,
    date: "April 12, 2026",
    readTime: "9 min read",
    imageUrl: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: '1920s-crypto-parallels',
    title: "What I Learned Comparing 1920s Banking Trusts to Today's Crypto Exchanges",
    excerpt: "A revisionist perspective on the roaring twenties. The market dynamics, hidden leverage, and eventual regulations provide a near-perfect blueprint for predicting the next major DeFi collapse.",
    category: "History",
    author: elena,
    date: "April 8, 2026",
    readTime: "12 min read",
    imageUrl: "https://images.unsplash.com/photo-1524581774360-31db0ca735e0?q=80&w=2000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 'architecture-loneliness',
    title: "The Architecture of Loneliness: How I Realized Suburbs Rewire Brain Chemistry",
    excerpt: "American suburbs were built for cars, but neuroscientists are finding they inadvertently restructured human trust. I moved to a walkable grid and monitored my neurotransmitter baselines.",
    category: "Society",
    author: david,
    date: "February 22, 2026",
    readTime: "11 min read",
    imageUrl: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 'dark-data-enterprise',
    title: "I Mapped the 'Dark Data' Layer: The 80% of Global Information We Can't Access",
    excerpt: "We generate 2.5 quintillion bytes of data daily, yet we only structurally analyze 20% of it. I gained access to an enterprise server farm to find out exactly what insights are hiding in the dark.",
    category: "Science",
    author: aisha,
    date: "February 15, 2026",
    readTime: "13 min read",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    featured: false,
  }
];

export const MOCK_CATEGORIES = [
  "Technology",
  "Science",
  "History",
  "Society",
  "Business & Finance"
];
