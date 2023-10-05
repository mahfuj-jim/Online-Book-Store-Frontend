import React from "react";
import IntroLeftColumn from "../../molecules/intro/intro_left_column";
import Image from "../../atoms/elements/image/image";
import "./intro.style.css";

function Intro() {
  return (
    <div className="intro">
      <div className="left-panel">
        <IntroLeftColumn></IntroLeftColumn>
      </div>
      <div className="right-panel">
        <Image
          src={"/src/assets/books.png"}
          alt="Example"
          width={"550px"}
        ></Image>
      </div>
    </div>
  );
}

export default Intro;
