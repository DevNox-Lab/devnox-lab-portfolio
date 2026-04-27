import TopBar from '@/sections/TopBar';
import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import VideoShowcase from '@/sections/VideoShowcase';
import About from '@/sections/About';
import Work from '@/sections/Work';
import Clients from '@/sections/Clients';
import Services from '@/sections/Services';
import Partners from '@/sections/Partners';
import Footer from '@/sections/Footer';
import SideBadge from '@/sections/SideBadge';

export default function Home() {
  return (
    <div className="relative bg-black min-h-screen">
      {/* Fixed UI elements */}
      <TopBar />
      <Header />
      <SideBadge />
      
      {/* Main content */}
      <main>
        <Hero />
        <VideoShowcase />
        <About />
        <Services />
        <Work />
        <Clients />
        <Partners />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
