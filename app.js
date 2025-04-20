const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk parsing data form
app.use(express.urlencoded({ extended: true }));

// Array khodam lucu
const khodams = [
  "Beruang Sunda",
  "Lontong lumer",
  "Tuyul Ngoding",
  "Sendal Swallow",
  "Kapurung",
  "Cicak Sigma",
  "Kucing Plenger",
  "Kuda Poni",
  "Ayam Albino"
];

// Halaman awal dengan form input nama
const getFormPage = () => `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Cek Kodam Kamu</title>
  <style>
    body {
      background-color: #dff9fb;
      font-family: 'Comic Sans MS', cursive;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      flex-direction: column;
      margin: 0;
    }
    .form-box {
      background-color: white;
      padding: 30px;
      border-radius: 20px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
      text-align: center;
      width: 300px;
    }
    h1 {
      color: #6c5ce7;
    }
    input[type="text"] {
      padding: 10px;
      border-radius: 10px;
      border: 1px solid #ccc;
      margin-top: 10px;
      width: 100%;
      font-size: 16px;
    }
    button {
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #74b9ff;
      color: white;
      border: none;
      border-radius: 20px;
      font-size: 16px;
      cursor: pointer;
      width: 100%;
    }
    button:hover {
      background-color: #0984e3;
    }
    .footer {
      margin-top: 20px;
      font-size: 18px;
      color: #2d3436;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
    }
    .program {
      font-size: 14px;
      color: #2d3436;
      font-style: italic;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="form-box">
    <h1>Masukkan Namamu</h1>
    <form action="/hasil" method="POST">
      <input type="text" name="nama" placeholder="Contoh: Aerin" required>
      <br>
      <button type="submit">Cek Kodam Kamu </button>
    </form>
  </div>
  <div class="footer">by Aerin Natasya</div>
  <div class="program">1 Sekolah 1 Programmer Andalan</div>
</body>
</html>
`;

// Halaman hasil
const getResultPage = (nama, kodam) => `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Hasil Kodam</title>
  <style>
    body {
      background-color: #dff9fb;
      font-family: 'Comic Sans MS', cursive;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      flex-direction: column;
      text-align: center;
      margin: 0;
    }
    .box {
      background-color: white;
      padding: 30px;
      border-radius: 20px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
      width: 300px;
    }
    .nama {
      font-size: 26px;
      font-weight: bold;
      color: #2d3436;
      margin-bottom: 15px;
    }
    .kodam {
      font-size: 20px;
      color: #6c5ce7;
      font-style: italic;
    }
    a {
      margin-top: 30px;
      display: inline-block;
      padding: 10px 20px;
      background-color: #74b9ff;
      color: white;
      text-decoration: none;
      border-radius: 20px;
    }
    a:hover {
      background-color: #0984e3;
    }
    .footer {
      margin-top: 30px;
      font-size: 18px;
      color: #2d3436;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
    }
    .program {
      font-size: 14px;
      color: #2d3436;
      font-style: italic;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="box">
    <div class="nama">${nama}</div>
    <div class="kodam">${kodam}</div>
    <a href="/">Coba Lagi</a>
  </div>
  <div class="footer">by Aerin Natasya</div>
  <div class="program">1 Sekolah 1 Programmer Andalan</div>
</body>
</html>
`;

// Route halaman awal
app.get('/', (req, res) => {
  res.send(getFormPage());
});

// Route hasil dari form
app.post('/hasil', (req, res) => {
  const nama = req.body.nama;
  const randomKhodam = khodams[Math.floor(Math.random() * khodams.length)];
  res.send(getResultPage(nama, randomKhodam));
});

// Start server
app.listen(port, () => {
  console.log(`Aplikasi khodam lucu jalan di http://localhost:${port}`);
});
