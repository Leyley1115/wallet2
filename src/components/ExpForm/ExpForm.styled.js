import styled from "styled-components"

export const TableBlok=styled.div`
    display:flex;
    gap: 32px;
    flex-direction: column;
    border: none;
    width: 379px;
    height: 618px;
    padding: 32px;
    background-color: #ffffff;
    border-radius: 30px;

    & h2, h3{
        margin: 0;
    }
`

export const Input = styled.input`
  width: 100%;
  height: 39px;
  border-radius: 6px;
  border: 1px solid #7334EA;
  background-color: #F1EBFD;
`

export const Btn = styled.button`
  width: 100%;
  height: 39px;
  background-color: #7334EA;
  border-radius: 6px;
  color: #ffffff;
  border: none;
`

export const ThemeBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
export const CategoryBox = styled.div`
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
`
export const CategoryLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

    &:has(input:checked) img {
    filter: invert(27%) sepia(93%) saturate(7475%) hue-rotate(251deg) brightness(92%) contrast(101%);
  }
`

export const HiddenRadio = styled.input`
  display: none;
`

export const CategoryButton = styled.span`
    display: flex;
    align-items: center;
    gap: 12px;

    padding: 8px 20px;
    border-radius: 8px;
    background-color: #F4F5F6;
    color: #000;
    cursor: pointer;

    ${HiddenRadio}:checked + & {
        background: #F1EBFD;
        color: #7334EA;
    }
`

