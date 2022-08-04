const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');



//서버생성
const app = express();


//미들웨어  json형식으로 데이터 주고받을예정
app.use(bodyParser.json());                 //body영역에 데이터를 보낼때 json으로 보내주세요~ 기능
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', function (req, res) {
    // 클라이언트 쪽에 생성한 데이터 옮겨옴
    // json형태로 확인됨
    res.send(
        [
            {
                'id': 1,
                'image': 'https://placeimg.com/64/64/1',
                'name': '홍길동',
                'birthday': '20220101',
                'gender': '남자',
                'job': '대학생',
            },
            {
                'id': 2,
                'image': 'https://placeimg.com/64/64/2',
                'name': '김길동',
                'birthday': '20220102',
                'gender': '남자',
                'job': '개발자',
            },
            {
                'id': 3,
                'image': 'https://placeimg.com/64/64/3',
                'name': '이길동',
                'birthday': '20220103',
                'gender': '여자',
                'job': '소프트웨어 엔지니어',
            }
        ]
    );
});


//서버포트지정
app.listen(55555, function () {
    console.log('listening on http://127.0.0.1:55555')
});









