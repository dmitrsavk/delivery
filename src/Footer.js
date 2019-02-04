import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  padding: 20px 15px;
  background-color: #262626;
  color: #fff;
  min-height: 200px;

  @media (min-width: 900px) {
    padding: 50px 0;
  }
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const NavLink = styled.a`
  color: #d4d4d4;

  :visited,
  :hover,
  :focus {
    color: #d4d4d4;
  }
`;

const SLink = styled(Link)`
  color: #d4d4d4;

  :visited,
  :hover,
  :focus {
    color: #d4d4d4;
  }
`;

export default () => (
  <Wrap>
    <Inner>
      ООО "ИНТЕРНЕТ ТОРГОВЛЯ" ОГРН: 5137746174242 ИНН: 7726736185 117105
      <br />
      ГОРОД МОСКВА, ШОССЕ ВАРШАВСКОЕ, ДОМ 1, СТРОЕНИЕ 1-2, ОФИС 350
      <br />
      <br />
      Designed and developed by{" "}
      <NavLink href="https://t.me/dmitrsavk">Dmitry Savkin</NavLink>
      <br />
      <SLink to="/privacy">Политика конфиденциальности</SLink>
    </Inner>
  </Wrap>
);
