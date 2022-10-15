import { memo } from "react";
import Styled from "styled-components";
import "./Style.scss";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <Container id={"app"}>
      <NavBar />
      <Home />
    </Container>
  );
}

const Container = Styled.div``;

export default memo(App);
