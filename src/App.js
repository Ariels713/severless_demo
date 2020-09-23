import React from "react";
//router
import { Switch, Route, Link } from "react-router-dom";
//components
import Game from "./pages/Game.js";
import HighScores from "./pages/HighScores.js";
import GameOver from "./pages/GameOver.js";
import Home from "./pages/Home.js";
import NavBar from "./components/NavBar.js";
//styles
import Container from "./styled/Container.js";
import Main from "./styled/Main.js";
import GlobalStyles from "./styled/Global.js";
function App() {
  return (
    <>
      <Main>
        <GlobalStyles />
        <Container>
          <NavBar />
          <Switch>
            <Route path="/game" component={Game} />
            <Route path="/highScores" component={HighScores} />
            <Route path="/gameOver" component={GameOver} />
            <Route path="/" component={Home} />
          </Switch>
        </Container>
      </Main>
    </>
  );
}

export default App;
