import { ExpContext } from "./expContext"
import { useState} from "react"

const ExpProvider = ({ children }) => {
  const [error, setError] = useState('');
  const [rows, setRows] = useState([]);

  const removeRow = (index) => {
    setRows(rows.filter((el, i) => i !== index))
  }

  const addRow = (newRow) => {
    setRows(prev => [...prev, newRow])
  }

  const updateCell = (index, field, value) => {
    const updated = [...rows]
    updated[index][field] = value
    setRows(updated)
  }

  const value={
    addRow,
    updateCell,
    rows,
    setRows,
    removeRow
  }

  return(
    <ExpContext.Provider value={value}>
        {children}
    </ ExpContext.Provider>
  )

}

export default ExpProvider;