// api/account.js
export const accounts = [
  { username: "admin", password: "admin089654" },
  { username: "rapz12", password: "rapz321" },
  { username: "Alpan", password: "Alpan354" },
    { username: "mamz", password: "mamz9772" },
  { username: "amlv", password: "amlv08977" },
  { username: "Lans", password: "Lans0" },
  { username: "rexz", password: "bebas" },
    { username: "sinz", password: "sinz086658" },
  { username: "Payzz", password: "awok08977" },
 { username: "Fan", password: "Fan089777" },
  { username: "vidzx", password: "vidzx089777" },
  { username: "adityagntng", password: "adit22376" },
    { username: "Ichigo", password: "Ichigo8762" },
  { username: "ADITZG", password: "ADITZG8762" },
  { username: "YIZZD", password: "YIZZD77647" },
  { username: "RAIZO", password: "RAIZO9847" },
  { username: "wahyuu22", password: "wahyuu2247" },
  { username: "ashurammk", password: "ashurammk889" },
    { username: "nopal", password: "nopal6387" },
    { username: "Ocim", password: "Ocim6651" },
  
];

export function validateLogin(username, password) {
  return accounts.some(acc => acc.username === username && acc.password === password);
}
