import { useState, useEffect } from "react";
import {
  CalendarWrapper,
  Header,
  Title,
  WeekRow,
  MonthsScroll,
  MonthBlock,
  MonthTitle,
  DaysGrid,
  DayCell,
} from "./Calendar.styled";

import { GlobalStyle } from "../AuthForm/AuthForm.styled";
import { getPeriodTransaction } from "../../api/transactions";

const MONTHS_RU = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export default function Calendar({ token, onLoad }) {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const base = new Date();

  const months = Array.from({ length: 12 }, (_, i) => {
    const d = new Date(base.getFullYear(), base.getMonth() + i, 1);
    return {
      date: d,
      days: buildMonthDays(d),
    };
  });

  function onDayClick(day) {
    if (!day) return;

    if (!start || (start && end)) {
      setStart(day);
      setEnd(null);
    } else if (day >= start) {
      setEnd(day);
    } else {
      setStart(day);
    }
  }

  function isSameDay(a, b) {
    return (
      a &&
      b &&
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }

  function inRange(day) {
    if (!start || !end) return false;
    return day >= start && day <= end;
  }

  function formatDate(d) {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }



  useEffect(() => {
    async function load() {
      if (!start || !end) return;

      const data = await getPeriodTransaction({
        start: formatDate(start),
        end: formatDate(end),
        token,
      });

      onLoad({ start, end, transactions: data });
    }

    load();
  }, [start, end]);

  return (
    <>
      <GlobalStyle />

      <CalendarWrapper>
        <Header>
          <Title>Период</Title>

          <WeekRow>
            <span>ПН</span>
            <span>ВТ</span>
            <span>СР</span>
            <span>ЧТ</span>
            <span>ПТ</span>
            <span>СБ</span>
            <span>ВС</span>
          </WeekRow>
        </Header>

        <MonthsScroll>
          {months.map((m) => (
            <MonthBlock key={m.date.toISOString()}>
              <MonthTitle>
                {MONTHS_RU[m.date.getMonth()]} {m.date.getFullYear()}
              </MonthTitle>

              <DaysGrid>
                {m.days.map((day, i) => {
                  const isStart = day && isSameDay(day, start);
                  const isEnd = day && isSameDay(day, end);
                  const isMiddle = day && inRange(day) && !isStart && !isEnd;

                  return (
                    <DayCell
                      key={i}
                      $empty={!day}
                      $start={isStart}
                      $end={isEnd}
                      $middle={isMiddle}
                      onClick={() => onDayClick(day)}
                    >
                      {day ? day.getDate() : ""}
                    </DayCell>
                  );
                })}
              </DaysGrid>
            </MonthBlock>
          ))}
        </MonthsScroll>
      </CalendarWrapper>
    </>
  );
}

function buildMonthDays(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1);
  const startWeekDay = (firstDay.getDay() + 6) % 7;

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = Array(startWeekDay).fill(null);

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i));
  }

  return days;
}