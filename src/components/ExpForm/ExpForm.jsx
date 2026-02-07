import {
  TableBlok,
  CategoryBox,
  CategoryButton,
  HiddenRadio,
  Input,
  Btn,
  ThemeBlock,
  CategoryLabel,
} from './ExpForm.styled'
import { ExpContext } from '../../context/expContext'
import { useContext } from 'react'
import { useState, useEffect } from 'react'
import { getTransactions } from '../../api/transactions'

const ExpForm = () => {
  const token = localStorage.getItem('token')
  const { addRow, setRows } = useContext(ExpContext)
  const categoryList = [
    {
      key: 'food',
      title: 'Еда',
      icon: '/bag.svg',
    },
    {
      key: 'transport',
      title: 'Транспорт',
      icon: '/car.svg',
    },
    {
      key: 'home',
      title: 'Жильё',
      icon: '/house.svg',
    },
    {
      key: 'fun',
      title: 'Развлечения',
      icon: '/gameboy.svg',
    },
    {
      key: 'education',
      title: 'Образование',
      icon: '/teacher.svg',
    },
    {
      key: 'another',
      title: 'Другое',
      icon: '/message-text.svg',
    },
  ]

  const [form, setForm] = useState({
    description: '',
    category: '',
    date: '',
    sum: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    await addTransaction(form)
    useEffect(() => {
      ;(async () => {
        const list = await getTransactions({ token })
        setRows(list)
      })()
    }, [])
    setForm({
      description: '',
      category: '',
      date: '',
      sum: '',
    })
  }

  useEffect(() => {
    ;(async () => {
      const list = await getTransactions({ token })
      setRows(list)
    })()
  }, [])

  return (
    <TableBlok>
      <ThemeBlock>
        <h2>Новый расход</h2>
        <h3>Описание</h3>
        <Input
          type="text"
          name="description"
          value={form.description}
          placeholder="Введите описание"
          onChange={handleChange}
        />
      </ThemeBlock>

      <ThemeBlock>
        <h3>Категория</h3>
        <CategoryBox>
          <CategoryBox>
            {categoryList.map((c) => (
              <CategoryLabel key={c.key}>
                <HiddenRadio
                  type="radio"
                  name="category"
                  value={c.key}
                  checked={form.category === c.title}
                  onChange={() =>
                    setForm((prev) => ({ ...prev, category: c.title }))
                  }
                />
                <CategoryButton>
                  <img src={c.icon} alt="" />
                  {c.title}
                </CategoryButton>
              </CategoryLabel>
            ))}
          </CategoryBox>
        </CategoryBox>
      </ThemeBlock>

      <ThemeBlock>
        <h3>Дата</h3>
        <Input
          type="date"
          name="date"
          value={form.date}
          placeholder="Введите дату"
          onChange={handleChange}
        />
      </ThemeBlock>

      <ThemeBlock>
        <h3>Сумма</h3>
        <Input
          type="text"
          name="sum"
          min="0"
          value={form.sum}
          placeholder="Введите сумму"
          onChange={handleChange}
        />
      </ThemeBlock>

      <Btn onClick={handleSubmit}>Добавить новый расход</Btn>
    </TableBlok>
  )
}

export default ExpForm
