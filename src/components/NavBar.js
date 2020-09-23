import React from "react";
import { Link } from "react-router-dom";
import {
  NavBarStyles,
  LogoStyles,
  NavItems,
  StyledLink,
  Accent,
} from "../styled/NavBarStyles.js";
const NavBar = () => {
  return (
    <NavBarStyles>
      <LogoStyles>
        <Link to="/">
          Learn. Build. <Accent>Type</Accent>
        </Link>
      </LogoStyles>
      <NavItems>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/highScores">HighScores</StyledLink>
        </li>
      </NavItems>
    </NavBarStyles>
  );
};

export default NavBar;
