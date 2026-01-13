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
import { data } from '../../data'

const ExpForm = () => {
  const { addRow, setRows } = useContext(ExpContext);
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
    summ: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    addRow(form)
    setForm({
      description: '',
      category: '',
      date: '',
      summ: '',
    })
  }

  useEffect(() =>{
    setRows(data);
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
                    onChange={() => setForm(prev => ({ ...prev, category: c.title }))}
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
          name="summ"
          min="0"
          value={form.summ}
          placeholder="Введите сумму"
          onChange={handleChange}
        />
      </ThemeBlock>

      <Btn onClick={handleSubmit}>Добавить новый расход</Btn>
    </TableBlok>
  )
}

export default ExpForm
