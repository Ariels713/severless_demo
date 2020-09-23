import React from "react";
import HomeStyles from "../styled/HomeStyles.js";
import { Accent, StyledTitle } from "../styled/SpanStyle.js";
const Home = () => {
  return (
    <div>
      <StyledTitle>Ready To Type?</StyledTitle>
      <HomeStyles to="/game">
        Click To Type <Accent>'s'</Accent> to start playing!{" "}
      </HomeStyles>
    </div>
  );
};

export default Home;
