import Banner from "./components/Banner";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const Home = async () => {
  return (
    <>
      <Hero />
      <Features />
      <Banner />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
