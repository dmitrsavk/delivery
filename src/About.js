import React from "react";
import styled from "styled-components";

import team from "./images/team.jpg";

const Wrap = styled.div`
  margin-bottom: 30px;
  padding: 20px 0;
  background-color: #262626;
  color: #fff;

  @media (min-width: 900px) {
    padding: 50px 0;
    margin-bottom: 50px;
  }
`;

const Inner = styled.div`
  @media (min-width: 900px) {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  margin: 0 15px;
  margin-bottom: 10px;
  font-family: "Bebas";
  font-size: 25px;

  @media (min-width: 900px) {
    max-width: 1200px;
    margin: 0 auto 20px;
  }
`;

const SubTitle = styled.div`
  margin: 0 15px 35px;
  max-width: 1200px;
  text-align: center;

  @media (min-width: 900px) {
    margin: 0 0 50px;
  }
`;

const List = styled.div`
  margin: 0 15px;

  @media (min-width: 900px) {
    margin: 0;
  }
`;

const Item = styled.div`
  margin-bottom: 30px;
  display: inline-block;
  width: 50%;
  text-align: center;

  :nth-child(3),
  :nth-child(4) {
    margin-bottom: 0;
  }
`;

const ItemTitle = styled.div`
  font-size: 25px;
  font-weight: 600;

  @media (min-width: 900px) {
    font-size: 30px;
  }
`;

const ItemDescription = styled.div``;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;

  @media (min-width: 900px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

const DescrWrap = styled.div`
  @media (min-width: 900px) {
    margin-left: 50px;
  }
`;

export default ({onClick}) => (
  <Wrap>
    <Title>О нас</Title>
    <Inner>
      <Image src={team} onClick={onClick}/>
      <DescrWrap>
        <SubTitle>
          Мы - команда <b>Brute Goods</b> - создаем современные и очень
          качественные кошельки из кожи своими руками. В работе используется
          натуральная, плотная, бычья кожа.
        </SubTitle>
        <List>
          <Item>
            <ItemTitle>5 лет</ItemTitle>
            <ItemDescription>безупречной<br/>работы</ItemDescription>
          </Item>
          <Item>
            <ItemTitle>160м²</ItemTitle>
            <ItemDescription>использованной<br/>кожи</ItemDescription>
          </Item>
          <Item>
            <ItemTitle>>1000</ItemTitle>
            <ItemDescription>довольных<br/>клиентов</ItemDescription>
          </Item>
          <Item>
            <ItemTitle>0%</ItemTitle>
            <ItemDescription>
              <br />
              возвратов
            </ItemDescription>
          </Item>
        </List>
      </DescrWrap>
    </Inner>
  </Wrap>
);
