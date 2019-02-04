import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  margin-bottom: 30px;

  @media (min-width: 900px) {
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 50px;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  font-family: "Bebas";
  font-size: 25px;
  padding: 0 15px;

  @media (min-width: 900px) {
    padding: 0;
  }
`;

const Comment = styled.div`
  margin-bottom: 35px;

  @media (min-width: 900px) {
    width: 50%;

    :first-child {
      margin-right: 25px;
    }

    :last-child {
      margin-left: 25px;
    }
  }
`;

const Author = styled.div`
  font-family: "Bebas";
  font-size: 20px;
  padding: 0 15px;

  @media (min-width: 900px) {
    padding: 0;
  }
`;

const Text = styled.div`
  text-transform: lowercase;
  font-size: 15px;
  padding: 0 15px;
  font-style: italic;
  margin-bottom: 10px;

  @media (min-width: 900px) {
    padding: 0;
    margin-bottom: 30px;
  }
`;

const VideoWrap = styled.div`
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 56.25%;
`;

const Comments = styled.div`
  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
  }
`;

export default () => (
  <Wrap>
    <Title>Видео отзывы</Title>
    <Comments>
      <Comment>
        <Author>Айвар, 36 лет:</Author>
        <Text>
          "...ПОЛЬЗУЮСЬ КОШЕЛЬКОМ 2 ГОДА - ОН ДО СИХ ПОР КАК
          НОВЫЙ!...РЕКОМЕНДУЮ!"
        </Text>
        <VideoWrap>
          <iframe
            src="https://www.youtube.com/embed/R-rYvVFivMs"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="iframe"
            title="2"
          />
        </VideoWrap>
      </Comment>
      <Comment>
        <Author>Екатерина, 25 лет:</Author>
        <Text>
          "...ПОЛЬЗУЮСЬ КОШЕЛЬКОМ 2 ГОДА - ОН ДО СИХ ПОР КАК
          НОВЫЙ!...РЕКОМЕНДУЮ!"
        </Text>
        <VideoWrap>
          <iframe
            src="https://www.youtube.com/embed/4Q-JQW4YKR0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="iframe"
            title="1"
          />
        </VideoWrap>
      </Comment>
    </Comments>
  </Wrap>
);
