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
} from './BarChart.styled'

export default function BarChart({ period }) {
  if (!period) {
    return (
      <ChartWrapper>
        <Header>
          <Total>0 ₽</Total>
          <Title>Выберите период</Title>
        </Header>

        <BarsWrapper>
          <BarBlock>
            <Amount>0 ₽</Amount>
            <Bar $height={5} $color="#D9B6FF" />
            <Label>Еда</Label>
          </BarBlock>

          <BarBlock>
            <Amount>0 ₽</Amount>
            <Bar $height={5} $color="#FFB53D" />
            <Label>Транспорт</Label>
          </BarBlock>

          <BarBlock>
            <Amount>0 ₽</Amount>
            <Bar $height={5} $color="#6EE4FE" />
            <Label>Жилье</Label>
          </BarBlock>

          <BarBlock>
            <Amount>0 ₽</Amount>
            <Bar $height={5} $color="#B0AEFF" />
            <Label>Развлечения</Label>
          </BarBlock>

          <BarBlock>
            <Amount>0 ₽</Amount>
            <Bar $height={5} $color="#BCEC30" />
            <Label>Образование</Label>
          </BarBlock>

          <BarBlock>
            <Amount>0 ₽</Amount>
            <Bar $height={5} $color="#FFB9B8" />
            <Label>Другое</Label>
          </BarBlock>
        </BarsWrapper>
      </ChartWrapper>
    )
  }

  const { transactions } = period

  const categoryMap = {
    food: 'Еда',
    transport: 'Транспорт',
    home: 'Жилье',
    fun: 'Развлечения',
    education: 'Образование',
    other: 'Другое',
  }

  const grouped = transactions.reduce((acc, t) => {
    const name = categoryMap[t.category] || t.category
    acc[name] = (acc[name] || 0) + t.sum
    return acc
  }, {})

  const order = [
    'Еда',
    'Транспорт',
    'Жилье',
    'Развлечения',
    'Образование',
    'Другое',
  ]

  const items = order.map((cat) => ({
    category: cat,
    sum: grouped[cat] || 0,
  }))

  const max = Math.max(...items.map((i) => i.sum), 1)
  const total = items.reduce((acc, i) => acc + i.sum, 0)

  return (
    <ChartWrapper>
      <Header>
        <Total>{total.toLocaleString('ru-RU')} ₽</Total>
        <Title>Расходы за выбранный период</Title>
      </Header>

      <BarsWrapper>
        {items.map((item) => (
          <BarBlock key={item.category}>
            <Amount>{item.sum.toLocaleString('ru-RU')} ₽</Amount>

            <Bar
              $height={(item.sum / max) * 100}
              $color={
                item.category === 'Еда'
                  ? '#D9B6FF'
                  : item.category === 'Транспорт'
                    ? '#FFB53D'
                    : item.category === 'Жилье'
                      ? '#6EE4FE'
                      : item.category === 'Развлечения'
                        ? '#B0AEFF'
                        : item.category === 'Образование'
                          ? '#BCEC30'
                          : '#FFB9B8'
              }
            />

            <Label>{item.category}</Label>
          </BarBlock>
        ))}
      </BarsWrapper>
    </ChartWrapper>
  )
}
