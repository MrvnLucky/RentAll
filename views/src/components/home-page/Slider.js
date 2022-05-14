import React from "react";
import img1 from "./../../assets/pictures/1 (1).jpg";
import img2 from "./../../assets/pictures/1 (2).jpg";
import img3 from "./../../assets/pictures/1 (3).jpg";
import img4 from "./../../assets/pictures/1 (4).jpg";
import img5 from "./../../assets/pictures/1 (5).jpg";
import img6 from "./../../assets/pictures/1 (6).jpg";
import Coverflow from "react-coverflow";

/* will change the slider styling soon */
const Slider = () => {
  return (
    <div className="main-slider">
      <Coverflow
        width={960}
        height={480}
        displayQuantityOfSide={2}
        navigation={false}
        infiniteScroll={true}
        enableScroll={false}
        enableHeading={false}
      >
        <img
          src={img1}
          alt="title or description"
          style={{ display: "block", width: "100%" }}
          data-action="/category/61b1669f2876582ba0a651d0"
        />
        <img
          src={img2}
          alt="title or description"
          data-action="/category/61b21ff4ea936f5024793ab7"
        />
        <img
          src={img3}
          alt="title or description"
          data-action="/category/61b21fe4ea936f5024793ab4"
        />
        <img
          src={img4}
          alt="title or description"
          style={{ display: "block", width: "100%" }}
          data-action="/category/61b22123162d9b41cc0babdb"
        />
        <img
          src={img5}
          alt="title or description"
          data-action="/category/61b2200aea936f5024793abb"
        />
        <img
          src={img6}
          alt="title or description"
          data-action="/category/61b21fd5ea936f5024793ab1"
        />
      </Coverflow>
    </div>
  );
};

export default Slider;
