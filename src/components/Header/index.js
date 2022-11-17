import { TitleHeader, ImgUser, User, UserLog } from "./styled";

export const Header = ({ user, newUser }) => {
  return newUser === 2 ? (
    <TitleHeader>
      Insta4
      <UserLog>
        <ImgUser src={user.image} alt="" />

        <User>{user.userName}</User>
      </UserLog>
    </TitleHeader>
  ) : (
    <TitleHeader>Insta4</TitleHeader>
  );
};
