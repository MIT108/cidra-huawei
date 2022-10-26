import React from "react";
import ReactLoading from "react-loading";

import "./Loader.css";

import cidra from "../../assets/img/brand/CIDRAlogoBlueBg.svg";

function Loader(props) {
  return (
    <div className="loader-container">
      <div className="mb-5 loader-logo">
        <img src={cidra} alt="logo" className="" />
      </div>
      <ReactLoading
        type="spinningBubbles"
        color="blue"
        height={100}
        width={50}
      />
    </div>
  );
}

export default Loader;
