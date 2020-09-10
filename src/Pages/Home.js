import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import TopSection from "../Components/TopSection/TopSection";
import Section2 from "../Components/Section2/Section2";
import Section3 from "../Components/Section3/Section3";
import SocialMedia from "../Components/SocialMedia/SocialMedia";
import Footer from "../Components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SocialMedia />
      <TopSection />
      <Section2 />
      <Section3 />
      <Footer/>
    </div>
  );
};

export default Home;
