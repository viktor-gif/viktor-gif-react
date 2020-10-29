import React from "react";
import warriors from "../../music/warriors.mp3";

const Music = (props) => {
  return (
    <div>
      <audio>
        <source src={warriors} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Music;
