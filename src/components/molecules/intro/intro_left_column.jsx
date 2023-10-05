import React from "react";
import Button from "../../atoms/elements/button/button";

function IntroLeftColumn() {
  return (
    <div>
      <h2>Explore Beyond the Pages</h2>
      <p>
        Explore beyond the books. Discover literary accessories, stay informed
        with author interviews and literary news on our blog, and dive into a
        vibrant world where every page turned opens up new possibilities.
        Welcome to your literary gateway.
      </p>
      <Button className={"btn"} title={"Explore Now"}></Button>
    </div>
  );
}

export default IntroLeftColumn;
