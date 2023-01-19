import React from "react";
import "../App.css";
import "./HeroSection.css";
import HoverVideoPlayer from "react-hover-video-player";
import { useEffect, useState, useRef } from "react";

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
          muted
          onEnded={() => setVidIndex((idx) => idx + 1)}
        />
        <HoverVideoPlayer
          style={{ display: vidIndex === 0 ? "none" : "block" }}
          className="test"
          videoSrc="/videos/loop.mp4"
          muted
          loop
          ref={ref}
          pausedOverlay={
            <div className="test">
              <div className="test2">
                <h1>.</h1>
              </div>
            </div>
          }
        />
      </div>
    </>
  );
}

export default HeroSection;