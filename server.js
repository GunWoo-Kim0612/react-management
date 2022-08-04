const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//서버생성
const app = express();


//미들웨어  json형식으로 데이터 주고받을예정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//서버 테스트...  json객체형태로 데이터 전송    http://127.0.0.1:55555/app/hello   확인!
app.get('/app/hello', function (req, res) {
    res.send({ message: 'Hello' });
})


//서버포트지정
app.listen(55555, function () {
    console.log('listening on http://127.0.0.1:55555')
});









