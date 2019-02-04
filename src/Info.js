import React from "react";
import styled from "styled-components";
import moment from "moment";

import open from "./images/open.jpg";
import close from "./images/close.jpg";

const Wrap = styled.div`
  margin-top: 35px;
  padding: 0 15px;

  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 100px auto 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 0 auto;
  max-width: 500px;
`;

const Description = styled.div`
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  font-family: "Bebas";
  font-size: 25px;
`;

const ImagesWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;

  @media (min-width: 900px) {
    display: none;
  }
`;

const List = styled.ul`
  padding-left: 20px;
  margin-bottom: 30px;

  @media (min-width: 900px) {
    margin-bottom: 50px;
  }
`;

const Item = styled.li`
  margin-bottom: 10px;

  ${p =>
    p.bold &&
    `
      font-weight: 600;
  `};
`;

const DesktopImages = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: block;
    margin-right: 50px;
  }
`;

const Text = styled.div``;

const Colors = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  max-width: 290px;
`;

const Color = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColorTitle = styled.div`
  font-size: 15px;
  text-align: center;
`;

const Circle = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin-bottom: 10px;

  background-color: ${p => p.color};
`;

const Span = styled.span`
  ${p => p.through && "text-decoration: line-through; margin-right: 10px;"};

  ${p => p.bold && "font-weight: 600; font-size: 18px;"};
`;

const getDate = () => {
  moment.locale("ru");
  const date = moment().add(5, "days");

  return moment(date).format("D MMMM");
};

export default ({ onClick }) => (
  <Wrap>
    <DesktopImages>
      <Image src={open} onClick={onClick} />
      <Image src={close} onClick={onClick} />
    </DesktopImages>
    <Text>
      <Title>Описание</Title>
      <Description>
        Кожаный клатч-портмоне среднего размера. Сдержанный дизайн и большая
        вместительность. Подходит для хранения водительских документов,
        паспорта, смартфона, купюр и пластиковых карт.
      </Description>

      <Title>Стоимость</Title>
      <Description>
        <Span through>4200 ₽</Span><br/>
        <Span bold>3190 ₽</Span> - до {getDate()}!<br/>
        <Span bold>Оплата при получении</Span>
      </Description>

      <ImagesWrap>
        <Image src={open} onClick={onClick} />
        <Image src={close} onClick={onClick} />
      </ImagesWrap>

      <Title>Характеристики</Title>
      <List>
        <Item>три кармана для купюр</Item>
        <Item>три кармана для пластиковых карт</Item>
        <Item>каждый карман вмещает три пластиковые карты</Item>
        <Item>размер: 11 х 21 см</Item>
        <Item>полностью ручной раскрой и прошивка</Item>
        <Item>натуральная плотная, бычья кожа толщиной 2 мм</Item>
        <Item>
          возможность нанесения любой надписи или изображения путем лазерной
          гравировки
        </Item>
        <Item>
          возможные цвета прошивки: черный, белый, красный, синий, бежевый
        </Item>
        <Item bold>пожизненная гарантия</Item>
      </List>

      <Title>Три цвета на выбор</Title>
      <Colors>
        <Color>
          <Circle color="#262524" />
          <ColorTitle>Ночь</ColorTitle>
        </Color>

        <Color>
          <Circle color="#61423C" />
          <ColorTitle>Шоколад</ColorTitle>
        </Color>

        <Color>
          <Circle color="#D28256" />
          <ColorTitle>Сахара</ColorTitle>
        </Color>
      </Colors>
    </Text>
  </Wrap>
);
