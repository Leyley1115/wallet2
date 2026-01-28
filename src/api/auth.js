export async function register({ name, email, password }) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const exists = users.find(u => u.name === name);
    if (exists) {
        throw new Error("Пользователь уже существует");
    }

    const newUser = { 
        token: Date.now(),
        name,
        email,
        password,
        
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    return { message: "ok" };
}

export async function login({ name, password }) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(u => u.name === name && u.password === password);
    if (!user) {
        throw new Error("Неверный логин или пароль");
    }

    localStorage.setItem("token", user.token);

    return { token: user.token };
}

export function logout() {
  localStorage.removeItem("token");
  setIsAuth(false);
  navigate("/login");
}

