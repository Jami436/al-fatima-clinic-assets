import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BentoSection from '@/components/BentoSection';
import TrustBanner from '@/components/TrustBanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container px padding-y">
        <Hero />
        <BentoSection />
        <TrustBanner />
      </main>
      <Footer />
    </>
  );
}
