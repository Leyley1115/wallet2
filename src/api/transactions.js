export async function addTransaction(tx) {
  const userId = localStorage.getItem("userId");
  if (!userId) throw new Error("Unauthorized");

  const all = JSON.parse(localStorage.getItem("transactions") || "{}");

  const list = all[userId] || [];

  list.push({ ...tx, id: Date.now() });

  all[userId] = list;

  localStorage.setItem("transactions", JSON.stringify(all));

  return { message: "ok" };
}

export async function getTransactions() {
  const userId = localStorage.getItem("userId");
  if (!userId) throw new Error("Unauthorized");

  const all = JSON.parse(localStorage.getItem("transactions") || "{}");

  return all[userId] || [];
}
