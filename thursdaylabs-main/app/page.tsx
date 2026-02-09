import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Games from "@/components/sections/Games";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Games />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
