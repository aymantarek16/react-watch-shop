import React from "react";
import "./video-section.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";

const VideoSection = () => {
  return (
    <>
      <div className="video">
        <div className="video_logo">
          <div className="VideoImage"></div>
          <div className="overlay">
            
        <a  href="https://youtu.be/LXb3EKWsInQ" target='blank'>
          <i className="playIcon">{<BsPlayFill />}</i>
        </a>
          </div>
        </div>

        <div className="next">
          <h4>NEXT VIDEO</h4>
          <i>{<AiOutlineArrowRight />}</i>
        </div>

      </div>
    </>
  );
};

export default VideoSection;
