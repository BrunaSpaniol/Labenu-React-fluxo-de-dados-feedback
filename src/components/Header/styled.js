import styled from "styled-components";

export const TitleHeader = styled.header`
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8vh;
`;

export const UserLog = styled.div`
  align-self: flex-start;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  order: -2;
  align-items: center;
  justify-content: center;
`;

export const ImgUser = styled.img`
  width: 50px;
  height: 50px;
  display: inline-block;
  border-radius: 50%;
`;

export const User = styled.h5`
  order: 1;
  font-size: 14px;
`;
