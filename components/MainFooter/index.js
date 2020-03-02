import React from "react";
import styled from "styled-components";

const MainFooterHolder = styled.div`
  margin: 4% 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 350px;
  }
`;

const CopyrightHolder = styled.div`
  font-size: 0.9rem;
  max-width: 800px;
  text-align: center;
  color: #454545;
`;

export default function index() {
  return (
    <MainFooterHolder>
      <img src="/img/gdg.png" />
      <CopyrightHolder>
        O Google Developers Group é uma iniciativa de pessoas interessadas em
        construir com tecnologia e disseminar o conhecimento. Nossos eventos são
        direcionados para a comunidade de desenvolvedores, engenheiros,
        designers e empreendedores, organizados pelos nossos membros de forma
        voluntária e sem fins lucrativos. Encontre outros capítulos do GDG no
        Brasil no Meetup
      </CopyrightHolder>
    </MainFooterHolder>
  );
}
