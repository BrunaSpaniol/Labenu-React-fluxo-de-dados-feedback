import { TitleHeader, ImgUser, User } from "./styled";

export const Header = ({ user }) => {
  return (
    <TitleHeader>
      Insta4
      <ImgUser src={user.image} alt="" />
      <User>{user.userName}</User>
    </TitleHeader>
  );
};
