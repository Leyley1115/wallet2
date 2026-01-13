import React from "react";
import {
  ChartWrapper,
  Header,
  Title,
  Total,
  BarsWrapper,
  BarBlock,
  Bar,
  Amount,
  Label,
} from "./Bar_chart.styled";

export default function BarChart() {
  return (
    <ChartWrapper>
      <Header>
        <Total>9 581 ₽</Total>
        <Title>Расходы за 10 июля 2024</Title>
      </Header>

      <BarsWrapper>
        <BarBlock>
            <Amount>21 990 ₽</Amount>
            <Bar $height={100} $color="#D9B6FF" />
          
            <Label>Еда</Label>
        </BarBlock>

        <BarBlock>
            <Amount>11 046 ₽</Amount>
            <Bar $height={40} $color="#FFB53D" />
            <Label>Транспорт</Label>
        </BarBlock>

        <BarBlock>
            <Amount>0 ₽</Amount>
            <Bar $height={2} $color="#6EE4FE" />
          
          <Label>Жилье</Label>
        </BarBlock>

        <BarBlock> 
            <Amount>13 050 ₽</Amount>
            <Bar $height={35} $color="#B0AEFF" />
          
          <Label>Развлечения</Label>
        </BarBlock>

        <BarBlock>
            <Amount>0 ₽</Amount>
            <Bar $height={25} $color="#BCEC30" />
            <Label>Образование</Label>
        </BarBlock>

        <BarBlock> 
            <Amount>19 106 ₽</Amount>
            <Bar $height={60} $color="#FFB9B8" />
            <Label>Другое</Label>
        </BarBlock>
      </BarsWrapper>
    </ChartWrapper>
  );
}
