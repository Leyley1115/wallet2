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
import { useContext, useState, useEffect } from 'react'
import { getTransactions, addTransaction } from '../../api/transactions'

const ExpForm = () => {
  const token = localStorage.getItem('token')
  const { setRows } = useContext(ExpContext)

  const categoryList = [
    { key: 'food', title: 'Еда', icon: '/bag.svg' },
    { key: 'transport', title: 'Транспорт', icon: '/car.svg' },
    { key: 'housing', title: 'Жильё', icon: '/house.svg' },
    { key: 'joy', title: 'Развлечения', icon: '/gameboy.svg' },
    { key: 'education', title: 'Образование', icon: '/teacher.svg' },
    { key: 'others', title: 'Другое', icon: '/message-text.svg' },
  ]

  const [errors, setErrors] = useState({
    description: false,
    sum: false,
    category: false,
    date: false,
  })

  const [form, setForm] = useState({
    description: '',
    sum: '',
    category: '',
    date: '',
  })

  const hasErrors = Object.values(errors).some(v => v)
  const validateField = (name, value) => {
    switch (name) {
      case 'description':
        return value.trim().length <= 3
      case 'sum':
        return value.trim() === '' || isNaN(Number(value))
      case 'category':
        return value === ''
      case 'date':
        return value === ''
      default:
        return false
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (hasErrors) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value),
      }))
    }
  }

  const handleSubmit = async () => {
    const newErrors = {
      description: validateField('description', form.description),
      sum: validateField('sum', form.sum),
      category: validateField('category', form.category),
      date: validateField('date', form.date),
    }

    setErrors(newErrors)

    if (Object.values(newErrors).some(v => v)) return

    const d = new Date(form.date)
    const formattedDate = `${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`

    await addTransaction({
      token,
      form: { ...form, date: formattedDate },
    })

    const list = await getTransactions({ token })
    setRows(list)

    setForm({
      description: '',
      sum: '',
      category: '',
      date: '',
    })

    setErrors({
      description: false,
      sum: false,
      category: false,
      date: false,
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
        <h3>Описание
          {errors.description && <span style={{ color: 'red' }}> *</span>}
        </h3>

        <Input
          type="text"
          name="description"
          value={form.description}
          placeholder="Введите описание"
          onChange={handleChange}
          $error={errors.description}
        />
      </ThemeBlock>

      <ThemeBlock>
        <h3>
          Категория
          {errors.category && <span style={{ color: 'red' }}> *</span>}
        </h3>

        <CategoryBox>
          {categoryList.map((c) => (
            <CategoryLabel key={c.key}>
              <HiddenRadio
                type="radio"
                name="category"
                value={c.key}
                checked={form.category === c.key}
                onChange={() =>
                  handleChange({ target: { name: 'category', value: c.key } })
                }
                $error={errors.category}
              />
              <CategoryButton>
                <img src={c.icon} alt="" />
                {c.title}
              </CategoryButton>
            </CategoryLabel>
          ))}
        </CategoryBox>
      </ThemeBlock>

      <ThemeBlock>
        <h3>Дата
          {errors.date && <span style={{ color: 'red' }}> *</span>}
        </h3>
        <Input
          type="date"
          name="date"
          value={form.date}
          placeholder="Введите дату"
          onChange={handleChange}
          $error={errors.date}
        />
      </ThemeBlock>

      <ThemeBlock>
        <h3>Сумма
          {errors.sum && <span style={{ color: 'red' }}> *</span>}
        </h3>
        <Input
          type="text"
          name="sum"
          min="0"
          value={form.sum}
          placeholder="Введите сумму"
          onChange={handleChange}
          $error={errors.sum}
        />
      </ThemeBlock>

      <Btn
        onClick={handleSubmit}
        // disabled={hasErrors}
        $isDisabled={hasErrors}
      >
        Добавить новый расход
      </Btn>
    </TableBlok>
  )
}

export default ExpForm