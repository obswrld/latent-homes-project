import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Properties from "./components/Properties";
import QnA from "./components/QnA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";

function App() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      {/* Sections will be added here one by one */}
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Properties />
      <QnA />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
}

export default App;
