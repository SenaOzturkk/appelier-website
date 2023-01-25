import React from "react";
import "../App.css";
import "./HeroSection.css";
import HoverVideoPlayer from "react-hover-video-player";
import { useEffect, useState, useRef } from "react";
import Mobile from "../images/mobile.jpeg";

const videoIntro = "/videos/intro.mp4";

function HeroSection() {
  const [vidIndex, setVidIndex] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (vidIndex === 0 && ref.current) {
      ref.current.play();
    }
  }, [ref, vidIndex]);
  return (
    <>
      <div className="hero-container">
        <video
          style={{ display: vidIndex === 1 ? "none" : "block" }}
          src={videoIntro}
          autoPlay
          playsInline
          muted
          onEnded={() => setVidIndex((idx) => idx + 1)}
        />
        <picture>
          <source media="(max-width:960px)" srcset="images/mobile.jpeg" />
        </picture>
        <HoverVideoPlayer
          style={{ display: vidIndex === 0 ? "none" : "block" }}
          className="test"
          videoSrc="/videos/loop2.mp4"
          muted
          playsInline
          loop
          ref={ref}
          /* pausedOverlay={
            <div className="stoppedImage">
              <h1>.</h1>
            </div>
          }*/
        />
      </div>
    </>
  );
}

export default HeroSection;
