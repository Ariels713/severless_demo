import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBarStyles = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 20px;
`;

export const LogoStyles = styled.div`
  font-size: 2.4rem;

  & > a {
    text-decoration: none;
  }
`;

export const NavItems = styled.ul`
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  transition: 200ms;
  &:hover {
    color: #e16365;
  }
`;

export const Accent = styled.span`
  color: #e16365;
`;
