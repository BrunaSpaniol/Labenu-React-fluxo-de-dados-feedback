import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel
} from "../FormularioPostagem/styled";

const FormularioLogin = ({setPageFlow}) => {
    
  const [user, setUser] = useState({
    userName: "",
    image: ""
  });
    function userOnChange(event) {
    const value = event.target.value;
    setUser({
      ...user,

      [event.target.name]: value
    });
  }
  const login = () => {
    const usuario = {
      userName: user.userName, 
      image: user.image 
    }
    setLogin(usuario)
    setPageFlow(2);
    ;
  };
  
  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input
            type={"text"}
            name="userName"
            onChange={userOnChange}
            value={user.userName}
          />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input
            type={"text"}
            name="image"
            onChange={userOnChange}
            value={user.image}
          />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
