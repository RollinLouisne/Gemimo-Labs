import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import LandingPage from './pages/LandingPage';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
