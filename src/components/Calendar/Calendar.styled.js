import styled from "styled-components";

export const CalendarWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  background: #ffffff;
  padding: 20px 24px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  width: 360px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  max-height: 600px;
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  background: #ffffff;
  z-index: 10;
  padding-bottom: 8px;
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

  span {
    text-transform: uppercase;
  }
`;

export const MonthsScroll = styled.div`
  overflow-y: auto;
  padding-right: 6px;
  display: flex;
  flex-direction: column;
  gap: 24px;
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
    if ($start || $end) return "#7334EA";
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
