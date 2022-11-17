import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = ({ post, postOnChange, mudaTela }) => {
  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input
            id="titulo"
            name="titulo"
            value={post.titulo}
            onChange={postOnChange}
          />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input
            id="foto"
            name="image"
            value={post.image}
            onChange={postOnChange}
          />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input
            id="descricao"
            name="descricao"
            value={post.descricao}
            onChange={postOnChange}
          />
        </StyledLabel>
      </Form>
      <SendButton onClick={mudaTela}>Publicar</SendButton>
    </FormContainer>
  );
};

export default FormularioCadastro;
