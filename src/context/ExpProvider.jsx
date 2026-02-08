import { ExpContext } from "./expContext"
import { useState} from "react"
import { delTransaction } from "../api/transactions";

const ExpProvider = ({ children }) => {
  const [rows, setRows] = useState([]);

  async function setTransactions({id, token}){
    const newList = await delTransaction({id, token});
    console.log(newList);
    return setRows(newList)
  }

  const value={
    rows,
    setRows,
    setTransactions
  }

  return(
    <ExpContext.Provider value={value}>
        {children}
    </ ExpContext.Provider>
  )

}

export default ExpProvider;