import React from "react";
import styled from "styled-components";

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const Wrap = styled.div`
  padding: 0 15px;
  margin-bottom: 30px;

  @media (min-width: 900px) {
    max-width: 1200px;
    margin: 0 auto 50px;
    padding: 0;
    margin-bottom: 100px;
  }
`;

const TitleWrap = styled.h2`
  position: relative;
  font-family: "Bebas";
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  padding-right: 20px;
`;

const Descr = styled.div`
  font-weight: 300;
`;

export default () => (
  <Wrap>
    <Accordion>
      <AccordionItem>
        <AccordionItemTitle>
          <TitleWrap>
            Почему гарантия пожизненная (в чем подвох)?
            <div className="accordion__arrow" role="presentation" />
          </TitleWrap>
        </AccordionItemTitle>
        <AccordionItemBody>
          <Descr>
            Потому что мы НЕ перепродаем якобы брендовые китайские кошельки, мы
            производим свои кошельки сами, используя только качественную
            натуральную кожу. Прошиваем всё вручную, крепкими нитями. Если
            кошелек сделан из настоящей кожи и прошит крепкими руками - он
            прослужит не одно поколение. Поэтому никакого подвоха нет: если
            делать качественно, то это на века!
          </Descr>
        </AccordionItemBody>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemTitle>
          <TitleWrap>
            Чем ваши кошельки лучше других, того же Baellerry?
            <div className="accordion__arrow" role="presentation" />
          </TitleWrap>
        </AccordionItemTitle>
        <AccordionItemBody>
          <Descr>
            Из отличий можно выделить следующие моменты:<br/>1) Наши кошельки
            сделаны из натуральной телячей кожи. Кошельки конкурентов - из
            кожезаменителя, который очень быстро рвётся и стерается.<br/>2) Мы даём
            пожизненную гарантию на свои кошельки. Гарантия на кошельки
            конкурентов - 1-3 месяца.<br/>3) Наши кошельки эксклюзивны. Для каждого
            покупателя кошелёк шьётся индивидуально. Кошельки конкурентов шьются
            на фабричном конвеере. Для всех одинаково.<br/>4) Наши кошельки
            эргономичны и продуманы функционально. Только необходимое, ничего
            лишнего. Кошельки конкурентов слишком объемны, носить их с собой
            почти невозможно. В большинстве своём кошельки конкурентов, как
            барсетка =)<br/>5) Наш кошелек не стыднно выложить на стол, например в
            кафе или ресторане. Кошелек конкурентов сразу выдает его низкое
            качество пошива, т.к. они в большинстве своем произведены на
            китайских фабриках.
          </Descr>
        </AccordionItemBody>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemTitle>
          <TitleWrap>
            Как докажете, что ваши кошельки из натуральной кожи?
            <div className="accordion__arrow" role="presentation" />
          </TitleWrap>
        </AccordionItemTitle>
        <AccordionItemBody>
          <Descr>
            1) Все очень просто – подпалите изделие в незаметном месте. Кожзам
            (из которого изготавливаются кошельки, наподобие Baellerry)
            расплавится, в то время как натуральная кожа останется в
            первозданном виде.<br/>2) Так же, если проткнуть кожезаменитель иголкой,
            она в него войдет с легкостью. Натуральная кожа – более плотная,
            проткнуть ее будет непросто.<br/>3) На каждый наш кошелек вы получите
            Сертификат соответствия, который гарантирует то, что кошелек
            действительно изготовлен из натуральной бычьей кожи.
          </Descr>
        </AccordionItemBody>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemTitle>
          <TitleWrap>
            Как вы успеваете шить кошельки вручную без задержек?
            <div className="accordion__arrow" role="presentation" />
          </TitleWrap>
        </AccordionItemTitle>
        <AccordionItemBody>
          <Descr>
            При определённой сноровке и должном опыте один мастер способен
            изготавливать до 10 кошельков в день. В данный момент мы имеем в
            штате 7 опытных мастеров по работе с кожей, работающих посменно.
            Поэтому без труда можем изготавливать 50 и более кошельков
            ежедневно, при 100% загрузке.
          </Descr>
        </AccordionItemBody>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemTitle>
          <TitleWrap>
            Долго ли мне придется ждать свой кошелек?
            <div className="accordion__arrow" role="presentation" />
          </TitleWrap>
        </AccordionItemTitle>
        <AccordionItemBody>
          <Descr>
            Мы высылаем заказанный вами кошелек в течение 24 часов с момента
            заказа. Добавляем 7-12 дней доставки (в зависимости от вашего места
            жительства). Поэтому можно сказать, что в среднем кошелек доходит до
            клиента за 10 дней. <b>ОПЛАТА ПРИ ПОЛУЧЕНИИ.</b>
          </Descr>
        </AccordionItemBody>
      </AccordionItem>
    </Accordion>
  </Wrap>
);
