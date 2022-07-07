import React from "react";
import BoxIcons from "../components/box-icons/BoxIcons";
import Choice1 from "../components/choice1/Choice1";
import Choice2 from "../components/choice2/Choice2";
import NewArrivals from "../components/new-arrivals/NewArrivals";
import OurItems from "../components/Our-Items/OurItems";
import PhotoSection from "../components/photo-section/PhotoSection";
import VideoSection from "../components/video-section/VideoSection";
import WatchAnimate from "../components/watch-animate/WatchAnimate";
import Footer from "../components/footer/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | eCommers</title>
      </Helmet>
      <WatchAnimate />
      <NewArrivals />
      <PhotoSection />
      <OurItems />
      <VideoSection />
      <Choice1 />
      <Choice2 />
      <BoxIcons />
      <Footer />
    </>
  );
};

export default Home;
