const express = require('express');
const cors = require('cors');
require('dotenv').config(); // .env 파일 로드

const app = express(); // 여기에서만 app 선언
const PORT = process.env.PORT || 3000; // 환경 변수에서 PORT 가져오기, 없으면 3000

app.use(cors());

// 카카오 API 키를 클라이언트에 제공하는 라우트
app.get('/get-kakao-key', (req, res) => {
  res.json({ apiKey: process.env.KAKAO_API_KEY });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});