import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import styled from "styled-components/macro";
import GlobalStyle from "./theme/globalStyle";
import Store from "./pages/Store";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Store />} />
      </Routes>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
`;

export default App;
