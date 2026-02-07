import axios from 'axios';

const API_URL = 'https://wedev-api.sky.pro/api/transactions';

export async function getTransactions({ token }) {
   try {
      const data = await axios.get(API_URL, {
         headers: {
            Authorization: 'Bearer ' + token,
         },
      })
      return data.data
   } catch (error) {
      throw new Error(error.message)
   }
}

export async function addTransaction({token, form}){
  try{
    const trs = await axios.post(API_URL, {
       description: form.description, 
       sum: Number(form.sum), 
       category: form.category, 
       date: form.date, 
      }, {
      headers: {
        "Content-Type": "",
        Authorization: 'Bearer ' + token,
      },
    })
    return console.log(trs.data)
  } catch(error){
    console.log('SERVER ERROR:', error.response?.data); 
    throw new Error(error.message);
  }
}