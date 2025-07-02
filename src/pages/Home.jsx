import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import GradientText from "../components/GradientText";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-#A9C46C text-[#a0522d] min-h-screen">
      <Navbar />
      <Header />

      {/* Home title section FIRST */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          <GradientText>Exquisite Handcrafted Jewelry</GradientText>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-[#a0522d]/80">
          Welcome to Dopeaf, your go-to destination for unique handcrafted jewelry pieces.
          Explore our stunning collection inspired by elegance and designed with love.
        </p>
      </section>

      {/* Hero section SECOND */}
      <Hero />

      <Footer />
    </div>
  );
};

export default Home;
