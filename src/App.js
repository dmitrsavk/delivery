import React, { Component } from "react";
import styled from "styled-components";
import Media from "react-media";
import { Parallax } from "react-parallax";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import moment from "moment";
import "moment/locale/ru";
import Modal from "react-responsive-modal";
import { withCookies } from "react-cookie";

import bg from "./bg.jpg";

import Info from "./Info";
import Gallery from "./Gallery";
import About from "./About";
import FeedBack from "./FeedBack";
import FAQ from "./FAQ";
import Form from "./Form";
import Footer from "./Footer";

const images = [
  "open.jpg",
  "close.jpg",
  "close-2.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg"
];

const Root = styled.div`
  .is_overlay {
    display: block;
    width: 100%;
    height: 100%;
  }

  #trailer {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
  }

  #trailer > video {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
  }

  @media (min-aspect-ratio: 16/9) {
    #trailer > video {
      height: 300%;
      top: -100%;
    }
  }
  @media (max-aspect-ratio: 16/9) {
    #trailer > video {
      width: 300%;
      left: -100%;
    }
  }
  /* Если есть поддержка object-fit (Chrome/Chrome для Android, Safari в iOS 8 и Opera), используем его: */
  @supports (object-fit: cover) {
    #trailer > video {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const VideWrap = styled.div``;

const Video = styled.video`
  filter: brightness(0.4);
`;

const ParallaxContent = styled.div`
  position: relative;
  height: 100vh;
`;

const ParallaxWrap = styled.div`
  img {
    filter: brightness(0.4) !important;
  }
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 100px;
  font-size: 50px;
  font-family: "Bebas";
  font-weight: 600;
  text-align: center;

  @media (min-width: 900px) {
    font-size: 70px;
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

const SubTitle = styled.h2`
  margin: 0;
  margin-bottom: 30px;
  font-family: "OpenSans";
  font-size: 25px;
  text-align: center;
  font-weight: 300;
  line-height: 25px;

  @media (min-width: 900px) {
    font-size: 40px;
    margin-bottom: 50px;
  }
`;

const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 0 15px;
  color: #fff;
`;

const List = styled.ul`
  padding: 0;
  text-align: center;
`;

const ItemWrap = styled.li`
  margin-bottom: 25px;
  list-style: none;

  @media (min-width: 900px) {
    margin-bottom: 45px;
  }
`;

const ItemTitle = styled.div`
  font-family: "Bebas";
  font-size: 20px;
  letter-spacing: 2px;

  @media (min-width: 900px) {
    font-size: 30px;
  }
`;

const ItemSubtitle = styled.div`
  font-weight: 300;
  line-height: 15px;
  font-style: italic;

  @media (min-width: 900px) {
    font-size: 20px;
  }
`;

const getDate = () => {
  moment.locale("ru");
  const date = moment().add(1, "days");

  return moment(date).format("D MMMM");
};

const Description = () => (
  <DescriptionWrap>
    <Title>Brute goods</Title>
    <SubTitle>Мужской кошелек из натуральной кожи</SubTitle>
    <List>
      <ItemWrap>
        <ItemTitle>Пожизненная гарантия</ItemTitle>
        <ItemSubtitle>не понравится кошелек - вернем деньги</ItemSubtitle>
      </ItemWrap>
      <ItemWrap>
        <ItemTitle>Полностью ручная работа</ItemTitle>
        <ItemSubtitle>мы не продаем китайский ширпотреб</ItemSubtitle>
      </ItemWrap>
      <ItemWrap>
        <ItemTitle>Кожаный брелок в подарок</ItemTitle>
        <ItemSubtitle>
          при заказе до {` ${getDate()} `} - дарим подарок
        </ItemSubtitle>
      </ItemWrap>
    </List>
  </DescriptionWrap>
);

const FormWrap = styled.div`
  font-family: "Bebas";

  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    font-size: 20px;
  }
`;

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Order = styled.ul`
  margin-bottom: 30px;
  padding-left: 20px;
  font-size: 25px;
  font-family: "Bebas";

  li {
    :not(:last-child) {
      margin-bottom: 10px;
    }
  }

  @media (min-width: 900px) {
    li {
      width: calc(100% + 20px);

      :not(:last-child) {
        margin-bottom: 15px;
      }
    }
  }
`;

const Zaeb = styled.div`
  padding-left: 20px;

  @media (min-width: 900px) {
    padding-left: 0;
  }
`;

const FormOuter = styled.div`
  padding: 20px 15px;
  background-color: #262626;
  color: #fff;
  margin-bottom: 30px;

  @media (min-width: 900px) {
    padding: 50px 0;
    margin-bottom: 50px;
  }
`;

const ModalDescription = styled.div`
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 30px;
  text-align: center;
`;

const ModalTitle = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  margin-top: 50px;
  font-family: "Bebas";
  font-size: 25px;
  text-align: center;
`;

const Lol = styled.span`
  position: relative;
  top: -10px;
  right: -5px;
  font-size: 15px;
  font-family: "OpenSans";
`;

const Lo1l = styled.span`
  position: relative;
  top: -30px;
  font-size: 15px;
  font-family: "OpenSans";
`;

class App extends Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    modalIsOpen: false,
    resultModalIsOpen: false,
    errModalIsOpen: false
  };

  onImageClick = () => {
    this.setState({ isOpen: true });
  };

  onOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };

  onCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  onOpenResultModal = () => {
    this.setState({ resultModalIsOpen: true });
  };

  onCloseResultModal = () => {
    this.setState({ resultModalIsOpen: false });
  };

  onOpenErrModal = () => {
    this.setState({ errModalIsOpen: true });
  };

  onCloseErrModal = () => {
    this.setState({ errModalIsOpen: false });
  };

  componentDidMount() {
    setTimeout(() => {
      this.onOpenModal();
    }, 180000);
  }

  onErr = err => {
    this.onOpenErrModal();
  };

  onSucc = err => {
    this.onOpenResultModal();
  };

  componentWillMount() {
    let uid = this.props.cookies.get("uid");

    if (!uid) {
      uid = `${Date.now()}${Math.round(Math.random() * 1000)}`;
      this.props.cookies.set("uid", uid);
    }

    fetch("https://brutegoods.ru/api/stat/land-show", {
      method: "post",
      body: JSON.stringify({
        offerId: 967,
        landName: "brutegoods.ru",
        isMobile: window.innerWidth <= 600
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <Root>
        <Media query="(min-width: 900px)">
          {matches =>
            matches ? (
              <VideWrap id="trailer" className="is_overlay">
                <Video
                  id="video"
                  width="100%"
                  height="auto"
                  autoPlay="autoplay"
                  loop="loop"
                  muted="muted"
                >
                  <source src="bg.mp4" type="video/mp4" />
                </Video>
                <Wrap>
                  <Description />
                  <Form
                    onErr={this.onErr}
                    onSucc={this.onSucc}
                    cookies={this.props.cookies}
                    formId="up"
                  />
                </Wrap>
              </VideWrap>
            ) : (
              <ParallaxWrap>
                <Parallax
                  bgImage={bg}
                  strength={300}
                  bgWidth="auto"
                  bgHeight="100vh"
                >
                  <ParallaxContent>
                    <Description />
                    <Form
                      onErr={this.onErr}
                      onSucc={this.onSucc}
                      cookies={this.props.cookies}
                      formId="up"
                    />
                  </ParallaxContent>
                </Parallax>
              </ParallaxWrap>
            )
          }
        </Media>
        <Info onClick={this.onImageClick} />
        <Gallery onClick={this.onImageClick} />
        <About onClick={this.onImageClick} />
        <FeedBack />
        <FormOuter>
          <FormWrap>
            <Order>
              <li>Оставьте заявку</li>
              <li>
                Мы перезвоним вам в течение 15 минут<Lol>*</Lol>
              </li>
              <li>
                Через 10-12 дней кошелек будет у вас на руках
                <br />
                <b>Оплата при получении</b>
              </li>
              <br />
              <Lo1l>*с 9:00 до 21:00 (мск)</Lo1l>
            </Order>
            <Zaeb>
              <Form
                border
                wide
                right
                onErr={this.onErr}
                onSucc={this.onSucc}
                cookies={this.props.cookies}
                formId="down"
              />
            </Zaeb>
          </FormWrap>
        </FormOuter>
        <FAQ />
        <Footer />

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
        <Modal
          open={this.state.modalIsOpen && !this.state.resultModalIsOpen}
          onClose={this.onCloseModal}
          center
        >
          <ModalTitle>Сомневаетесь?</ModalTitle>
          <ModalDescription>
            Закажите звонок и мы вам все подробно расскажем!
            <br />
            Брелок в подарок!
          </ModalDescription>
          <Form
            border
            onErr={this.onErr}
            onSucc={this.onSucc}
            cookies={this.props.cookies}
            formId="modal"
          />
        </Modal>

        <Modal
          open={this.state.resultModalIsOpen}
          onClose={() => {
            this.onCloseResultModal();
            this.onCloseModal();
          }}
          center
        >
          <ModalTitle>Спасибо за заявку!</ModalTitle>
          <ModalDescription>
            В течение 15 минут с вами свяжется наш администратор
            <br />c 9:00 до 21:00 по Москве
          </ModalDescription>
        </Modal>

        <Modal
          open={this.state.errModalIsOpen}
          onClose={this.onCloseErrModal}
          center
        >
          <ModalTitle>Что-то пошло не так</ModalTitle>
          <ModalDescription>Попробуйте еще раз</ModalDescription>
        </Modal>
      </Root>
    );
  }
}

export default withCookies(App);
