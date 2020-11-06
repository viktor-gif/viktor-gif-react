import React from "react";
import s from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div>
      <div className={s.loadingio}>
        <div className={s.ldio}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
