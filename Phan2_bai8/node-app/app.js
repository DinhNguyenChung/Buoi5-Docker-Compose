const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Kết nối MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Kiểm tra kết nối MySQL
connection.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối MySQL: ' + err.stack);
    return;
  }
  console.log('Đã kết nối tới MySQL với id ' + connection.threadId);
});

// Route đơn giản
app.get('/', (req, res) => {
  res.send('Hello from Node.js app connected to MySQL!');
});

app.listen(port, () => {
  console.log(`Ứng dụng Node.js đang chạy tại http://localhost:${port}`);
});
