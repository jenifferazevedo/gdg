import React from "react";
import styled from "styled-components";

const MainMenuContainer = styled.div`
  width: 100%;
  padding: 30px 8%;
  position: absolute;
  left: 0;
  top: 0;
  img{
    width: 200px;
  }
`;

export default function index() {
  return (
    <MainMenuContainer>
      <img src="/img/logo-wtm.png" />
    </MainMenuContainer>
  );
}
