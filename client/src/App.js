import React from "react";
import { Link, navigate, Router } from "@reach/router";
import axios from "axios";
import LogReg from "./views/LogReg.jsx";
import Welcome from "./views/Welcome";
import UserMain from "./views/UserMain";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <div>
        <Container>
          <Router>
            <UserMain path="/" />
            <Welcome path="/welcome" />
            <LogReg path="/login" />
          </Router>
        </Container>
      </div>
    </>
  );
}

export default App;
