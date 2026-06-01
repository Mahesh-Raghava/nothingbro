// payment-test.js

// Issue 1: Weak hardcoded admin token
const ADMIN_TOKEN = "admin-token-123";

// Issue 2: Weak random number generation
function generateOtp() {
  return Math.floor(Math.random() * 1000000);
}

// Issue 3: Unsafe HTML rendering (XSS risk)
function showComment(comment) {
  document.getElementById("comments").innerHTML =
    "<p>" + comment + "</p>";
}

// Issue 4: Missing input validation
function withdrawMoney(amount) {
  balance -= amount;
  return balance;
}

// Issue 5: Unsafe file path handling
function readUserFile(fileName) {
  const fs = require("fs");
  return fs.readFileSync("./uploads/" + fileName, "utf8");
}

// Issue 6: Weak password check
function login(password) {
  if (password === "123456") {
    return "Access granted";
  }

  return "Denied";
}

// Good code (should ideally not trigger comments)
function calculateTotal(price, tax) {
  return price + tax;
}

console.log(calculateTotal(100, 10));
