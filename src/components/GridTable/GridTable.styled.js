import styled from "styled-components";

export const TableBlok=styled.div`
    display:flex;
    overflow: auto;
    font-size: 12px;
    background-color: #ffffff;
    width: 789px;
    height: 618px;
    padding: 32px;
    flex-direction: column;
    border: none;
    border-radius: 30px;
`

export const TableBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  padding-top: 18px;
`

export const GridTableStyle = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 32px;

  & h4{
    font-size: 12px;
    margin: 0;
    font-weight: 400;
    color: #999999;
  }

  & p{
    margin: 0;
    font-size: 12px;
  }

`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
`