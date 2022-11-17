import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaPostagem/TelaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);
  const [login, setLogin] = useState({
    name: "",
    foto: "",
  });

  const [posted, setPosted] = useState({
    titulo: "",
    image: "",
    descricao: "",
  });

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header user={login} />
          {pageFlow === 1 ? (
            <FormularioLogin setPageFlow={setPageFlow} setLogin={setLogin} />
          ) : (
            <FormularioPostagem setPosted={setPosted} />
          )}
        </aside>
        <TelaDaPostagem post={posted} />
      </Container>
    </>
  );
}

export default App;
