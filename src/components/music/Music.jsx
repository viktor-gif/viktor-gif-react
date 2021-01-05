import React from "react";
import warriors from "../../audioFiles/warriors.mp3";
import classic from "../../audioFiles/classic.mp3";
import audio3 from "../../audioFiles/821ea91e3d8c.mp3";
import s from "./Music.module.css";

const Music = (props) => {
  return (
    <div className={s.audioContainer}>
      <audio controls>
        <source src={warriors} type="audio/mp3" />
      </audio>
      <audio controls>
        <source src={classic} type="audio/mp3" />
      </audio>
      <audio controls>
        <source src={audio3} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Music;
