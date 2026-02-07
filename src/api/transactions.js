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

export async function addTransactions({token, data}){
  try{
    const trs = await axios.post(API_URL, data, {
      headers: {
        Authorization: 'Bearer' + token,
      },
    })
    return trs.data
  } catch(error){
    throw new Errpr(error.massage)
  }
}