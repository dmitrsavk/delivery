import React, { Component } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  position: relative;
  z-index: 1;
  width: 260px;
  height: 150px;
  margin-bottom: 50px;

  ${p => !p.right && "margin: 0 auto 50px;"};

  @media (min-width: 900px) {
    ${p => p.wide && "width: 360px;"};
  }
`;

const Name = styled.div``;
const Phone = styled.div``;

const NameInput = styled.input`
  width: 100%;
  height: 45px;
  padding: 0 10px;
  border: none;
  border-radius: 2px;
  font-size: 20px;
  margin-bottom: 15px;
  outline: none;
  box-sizing: border-box;

  ${p => p.border && "border: 1px solid #326c82;"};

  ${p => !p.valid && "border: 1px solid red;"};
`;

const PhoneInput = styled.input`
  width: 100%;
  height: 45px;
  padding: 0 10px;
  border: none;
  border-radius: 2px;
  font-size: 20px;
  margin-bottom: 15px;
  outline: none;
  box-sizing: border-box;

  ${p => p.border && "border: 1px solid #326c82;"};

  ${p => !p.valid && "border: 1px solid red;"};
`;

const Button = styled.button`
  width: 75%;
  height: 45px;
  padding: 0 10px;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  outline: none;
  font-weight: 600;
  background-color: #326c82;
  color: #fff;
  text-transform: uppercase;
`;

class Form extends Component {
  state = {
    name: {
      value: "",
      valid: true
    },
    phone: {
      value: "",
      valid: true
    }
  };

  onNameChange = event => {
    this.setState({ name: { ...this.state.name, value: event.target.value } });

    if (this.nameValid(this.state.name.value) && !this.state.name.valid) {
      this.setState({
        name: {
          ...this.state.name,
          valid: true
        }
      });
    }
  };

  onPhoneChange = event => {
    this.setState({
      phone: { ...this.state.phone, value: event.target.value }
    });

    if (this.phoneValid(this.state.phone.value) && !this.state.phone.valid) {
      this.setState({
        phone: {
          ...this.state.phone,
          valid: true
        }
      });
    }
  };

  nameValid = name => name.length > 3;

  phoneValid = phone => phone.length > 10;

  onButtonClick = () => {
    if (
      this.nameValid(this.state.name.value) &&
      this.phoneValid(this.state.phone.value)
    ) {
      this.setState({
        name: {
          ...this.state.name,
          valid: true
        },
        phone: {
          ...this.state.phone,
          valid: true
        }
      });

      this.send();
    } else {
      this.setState({
        name: {
          ...this.state.name,
          valid: this.nameValid(this.state.name.value)
        },
        phone: {
          ...this.state.phone,
          valid: this.phoneValid(this.state.phone.value)
        }
      });
    }
  };

  send() {
    const name = this.state.name.value.trim();
    const phone = this.state.phone.value.trim();

    fetch("https://brutegoods.ru/api/lead/send", {
      method: "post",
      body: JSON.stringify({
        offerId: 967,
        name,
        phone,
        landName: "brutegoods.ru",
        isMobile: window.innerWidth <= 600,
        formId: this.props.formId
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(res => {
        console.log(res);
        if (res.ok) {
          this.props.onSucc(res);
        } else {
          this.props.onErr();
        }
      })
      .catch(err => {
        this.props.onErr(err);
      });
  }

  render() {
    return (
      <Wrap right={this.props.right} wide={this.props.wide}>
        <Name>
          <NameInput
            value={this.state.name.value}
            onChange={this.onNameChange}
            valid={this.state.name.valid}
            placeholder="Имя"
            border={this.props.border}
          />
        </Name>
        <Phone>
          <PhoneInput
            value={this.state.phone.value}
            onChange={this.onPhoneChange}
            valid={this.state.phone.valid}
            placeholder="Телефон"
            border={this.props.border}
          />
        </Phone>
        <Button onClick={this.onButtonClick}>Заказать</Button>
      </Wrap>
    );
  }
}

export default Form;
