export async function addTransaction(tx) {
  const token = localStorage.getItem("token");
  const all = JSON.parse(localStorage.getItem("transactions") || "{}");
  const list = all[token] || [];
  list.push({ ...tx, id: Date.now() });
  all[token] = list;
  localStorage.setItem("transactions", JSON.stringify(all));

  return { message: "ok" };
}

export async function getTransactions() {
  const token = localStorage.getItem("token");
  const all = JSON.parse(localStorage.getItem("transactions") || "{}");
  
  return all[token] || [];
}