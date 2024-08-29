import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Video.css"
 // Import the external CSS file

const Video = () => {
  const settings = {
    infinite: true,
    speed: 1000, // autoplay delay
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="video-container">
      {/* <Slider {...settings} className="slider">
      <p> Heljsjkhfjkfh</p>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Carousel POR" />
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/n6KdoMXeHtU/maxresdefault.jpg" alt="Carousel POR" />
        </div>
        <div className="bg-black">
          <video controls muted="muted">
            <source src="/production_id_4536566 (1080p).mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Carousel POR" />
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/n6KdoMXeHtU/maxresdefault.jpg" alt="Carousel POR" />
        </div>
      </Slider> */}
      <p> hfsjfhjksfhkfjs</p>
    </div>
  );
};

export default Video;
