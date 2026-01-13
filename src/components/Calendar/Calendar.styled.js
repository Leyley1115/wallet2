import styled from "styled-components";

export const CalendarWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  background: #ffffff;
  padding: 20px 24px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  width: 360px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const WeekRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: #8f8f8f;
  padding-bottom: 8px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 8px;

  span {
    text-transform: uppercase;
  }
`;

export const MonthsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MonthBlock = styled.div``;

export const MonthTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 4px;
`;

export const DayCell = styled.div`
  width: 32px;
  height: 32px;
  margin: 0 auto;
  border-radius: 50%;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ $start, $end, $middle, $empty }) => {
    if ($empty) return "transparent";
    if ($start || $end) return "#000000";
    if ($middle) return "#7334EA";
    return "#4f4f4f";
  }};

  background-color: ${({ $empty, $start, $end, $middle }) => {
    if ($empty) return "transparent";
    if ($start || $end) return "#F1EBFD";
    if ($middle) return "#F1EBFD";
    return "#F4F5F6";
  }};

  cursor: ${({ $empty }) => ($empty ? "default" : "pointer")};

  &:hover {
    background-color: ${({ $empty, $start, $end, $middle }) =>
      $empty || $start || $end || $middle ? "" : "#dcdcdc"};
  }
`;
;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #F4F5F6;
`;

export const Container = styled.div`
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
