import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const vidRef = useRef();

  const handleVideo = (e) => {
    e.stopPropagation();

    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  const handleMouseEnter = () => {
    if (playVideo) {
      setShowOverlay(true);
    }
  };

  const handleMouseLeave = () => {
    if (playVideo) {
      setShowOverlay(false);
    }
  };

  return (
    <div
      className="app__video"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      {showOverlay && (
        <div className="app__video-overlay flex__center">
          <div
            className="app__video-overlay_circle flex__center"
            onClick={handleVideo}
          >
            {playVideo ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
