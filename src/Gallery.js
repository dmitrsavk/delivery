import React, { Component } from "react";
import styled from "styled-components";

import tape from "./images/tape.svg";
import will from "./images/will.svg";
import clutch from "./images/clutch.svg";

const Wrap = styled.div`
  margin: 35px auto 0;
  padding: 0;
  max-width: 1200px;

  @media (min-width: 900px) {
    margin-top: 50px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;

  ${p => p.filters && "filter: brightness(0.4)"};
`;

const Images = styled.div`
  position: relative;
  max-width: 460px;
  margin: 0 auto 35px;
  cursor: pointer;

  @media (min-width: 900px) {
    flex: none;
    width: 50%;
    max-width: initial;
    margin-left: 50px;
  }
`;

const Placeholder = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 24px;
`;

const Description = styled.div`
  font-size: 15px;
  line-height: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-family: "Bebas";
  font-size: 25px;
`;

const DescriptionWrap = styled.div`
  padding: 0 15px;
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Tape = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background: url(${tape});
  background-size: cover;
`;

const Will = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background: url(${will});
  background-size: cover;
`;

const Clutch = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background: url(${clutch});
  background-size: cover;
`;

const Item = styled.div`
  margin-bottom: 50px;
`;

const Inner = styled.div`
  @media (min-width: 900px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

export default class extends Component {
  state = {
    lightboxIsOpen: false
  };

  closeLightbox() {
    this.setState({ lightboxIsOpen: false });
  }

  openLightbox() {
    this.setState({ lightboxIsOpen: true });
  }

  render() {
    return (
      <Wrap>
        <Inner>
          <Images onClick={this.props.onClick}>
            <Image src="1.jpg" filters />
            <Placeholder>Смотреть&nbsp;все&nbsp;фото</Placeholder>
          </Images>

          <DescriptionWrap>
            <Item>
              <TitleWrap>
                <Tape />
                <Title>Ручная работа</Title>
              </TitleWrap>
              <Description>
                Каждый кошелек прошивается нашим мастером вручную. Мы не
                занимаемся перепродажей китайских кошельков. Ручное изготовление
                позволяет достичь высокого качества, прочности, и надежности
                каждого элемента кошелька.
              </Description>
            </Item>

            <Item>
              <TitleWrap>
                <Will />
                <Title>Пожизненная гарантия</Title>
              </TitleWrap>
              <Description>
                Мы настолько уверены в качестве производимой продукции, что даем
                бессрочную гарантию на каждое изделие. Ни одной претензии к
                качеству за 5 лет работы! Если у вас возникнут проблемы с
                кошельком - мы вернём деньги!
              </Description>
            </Item>

            <Item>
              <TitleWrap>
                <Clutch />
                <Title>Натуральная кожа</Title>
              </TitleWrap>
              <Description>
                Нашим поставщиком является самый крупный кожевенный завод в
                России и Европе. Мы используем натуральную, плотную кожу
                комбинированного дубления, толщиной 1,5-2 мм, а также
                европейскую фурнитуру. Кожа средней степени жесткости, имеет
                благородный вид и приятна на ощупь. Устойчива к механическим
                воздействиям.
              </Description>
            </Item>
          </DescriptionWrap>
        </Inner>
      </Wrap>
    );
  }
}
