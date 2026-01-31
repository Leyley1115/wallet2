import axios from "axios";

export async function login({ login, password }) {
  try {
    const response = await axios.post(
      "https://wedev-api.sky.pro/api/user/login",
      { login, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    const message = error.response?.data?.message || "Ошибка авторизации";
    throw new Error(message);
  }
}

export async function register({ login, password, name }) {
  try {
    const response = await axios.post(
      "https://wedev-api.sky.pro/api/user",
      { login, password, name },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    const message = error.response?.data?.message || "Ошибка регистрации";
    throw new Error(message);
  }
}