import React from "react";
import BoxIcons from "../components/box-icons/BoxIcons";
import VideoSection from "../components/video-section/VideoSection";
import Footer from "../components/footer/Footer";
import AboutUS from "../components/about-us/AboutUS";
import OurMession from "../components/our-mession/OurMession";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
       <Helmet>
        <title>About | eCommers</title>
      </Helmet>
      <AboutUS />
      <OurMession />
      <VideoSection />
      <BoxIcons />
      <Footer />
    </>
  );
};

export default About;
