import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a, a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button, ._btn {
    cursor: pointer;
  }

  ul li {
    list-style: none;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: 'Montserrat', sans-serif;
  }

  ._hover01:hover {
    background-color: #33399b;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #F4F5F6;
`;

export const ContainerSignin = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 375px) {
    background-color: #FFFFFF;
  }
`;

export const ModalBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 379px;
  width: 100%;
  padding: 32px 34px;
  border-radius: 30px;
  border: 0.7px solid #D4DBE5;
  box-shadow: 0px 4px 67px -12px rgba(0,0,0,0.13);

  @media screen and (max-width: 375px) {
    max-width: 334px;
    width: 100%;
    padding: 0 16px;
    border-radius: 0;
    border: none;
    box-shadow: none;
  }
`;

export const ModalTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
  margin-bottom: 24px;
`;

export const ModalFormLogin = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  row-gap: 7px;

`;

export const ModalInput = styled.input`
  width: 100%;
  border-radius: 6px;
  border: 0.7px solid ${({ $error }) => ($error ? "red" : "#ccc")};
  outline: none;
  padding: 10px 8px;

  &::placeholder {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94A6BE;
  }
`;

export const ModalBtnEnter = styled.button`
  width: 100%;
  height: 39px;
  background-color: #7334EA;
  border-radius: 4px;
  margin-top:14px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #FFFFFF;

  @media screen and (max-width: 375px) {
    height: 40px;
  }
`;

export const ModalFormGroup = styled.div`
  text-align: center;
    color: rgba(148, 166, 190, 0.40);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
`;

export const ModalLink = styled(Link)`
color: inherit;
  font: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;