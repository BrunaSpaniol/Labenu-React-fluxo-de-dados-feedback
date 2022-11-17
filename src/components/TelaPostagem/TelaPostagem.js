import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = ({ post }) => {
  return (
    <ContainerPostagem>
      <TitleHeader>{post.titulo}</TitleHeader>
      <Image src={post.image} />
      <Description>{post.descricao}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
