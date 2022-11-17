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
  const [user, setUser] = useState({
    userName: "",
    image: ""
  });
  const [newUser, setNewUser] = useState(1);
  const [newTela, setNewTela] = useState(1);

  const [post, setPost] = useState({
    titulo: "",
    image: "",
    descricao: ""
  });

  const telaDefault = {
    titulo: "Um titulo",
    image: "https://picsum.photos/536/354",
    descricao: "Uma descrição"
  };

  function userOnChange(event) {
    const value = event.target.value;
    setUser({
      ...user,

      [event.target.name]: value
    });
  }

  function postOnChange(event) {
    const value = event.target.value;
    setPost({
      ...post,

      [event.target.name]: value
    });
  }
  const login = () => {
    setPageFlow(2);
    setNewUser(2);
  };

  const mudaTela = () => {
    setNewTela(2);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header user={user} newUser={newUser} />
          {pageFlow === 1 ? (
            <FormularioLogin
              login={login}
              user={user}
              userOnChange={userOnChange}
              setPageFlow={setPageFlow}
            />
          ) : (
            <FormularioPostagem
              post={post}
              postOnChange={postOnChange}
              setPost={setPost}
              setNewTela={setNewTela}
              mudaTela={mudaTela}
            />
          )}
        </aside>
        {newTela === 1 ? (
          <TelaDaPostagem post={telaDefault} />
        ) : (
          <TelaDaPostagem post={post} />
        )}
      </Container>
    </>
  );
}

export default App;
