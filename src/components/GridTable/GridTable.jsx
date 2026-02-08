import { useContext } from 'react'
import { GridTableStyle, TableBlok, TableBox } from './GridTable.styled'
import { ExpContext } from '../../context/expContext'

export function GridTable() {
  const { rows, setTransactions} = useContext(ExpContext);
  const categoryMap = {
  food: "Еда",
  transport: "Транспорт",
  housing: "Жильё",
  joy: "Развлечения",
  education: "Образование",
  others: "Другое",
};
const token = localStorage.getItem('token');

  return (
    <>
      <TableBlok>
        <h2>Таблица расходов</h2>
        <GridTableStyle
          style={{ borderBottom: '1px solid #999', paddingBottom: '6px' }}
        >
          <h4>Описание</h4>
          <h4>Категория</h4>
          <h4>Дата</h4>
          <h4>Сумма</h4>
          <h4></h4>
        </GridTableStyle>
        <TableBox>
          {rows.length > 0 ? (
            rows.map((row, index) => (
              <GridTableStyle key={index}>
                <p>{row.description}</p>
                <p>{categoryMap[row.category]}</p>
                <p>{new Date(row.date).toLocaleDateString("ru-RU")}</p>
                <p>{row.sum}</p>
                <img
                  key={index}
                  src="/del_icon.svg"
                  onClick={() => setTransactions({id: row._id, token})}
                ></img>
              </GridTableStyle>
            ))
          ) : (
            <p
              style={{
                fontSize: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              Пока нет введённых расходов
            </p>
          )}
        </TableBox>
      </TableBlok>
    </>
  )
}

export default GridTable
