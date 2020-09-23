import React from "react";
import {
  StyledGame,
  StyledScore,
  StyledTimer,
  StyledCharacter,
} from "../styled/GameStyles.js";

import { Strong } from "../styled/SpanStyle.js";
const Game = () => {
  return (
    <StyledGame>
      <StyledScore>
        Score : <Strong>0</Strong>
      </StyledScore>
      <StyledCharacter>A</StyledCharacter>
      <StyledTimer>
        Time: <Strong>0:00</Strong>
      </StyledTimer>
    </StyledGame>
  );
};

export default Game;
