import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = ({ setPosted }) => {
  const [post, setPost] = useState({
    titulo: "",
    image: "",
    descricao: ""
  });
  
    function postOnChange(event) {
    const value = event.target.value;
    setPost({
      ...post,

      [event.target.name]: value
    });
  
  const mudaTela = () => {
    const postagem = {
    titulo: post.titulo,
    image: post.image,
    descricao: post.descricao
    }
    setPosted(postagem);
    setPost({
    titulo: "",
    image: "",
    descricao: ""
  })
  };
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
