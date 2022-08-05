const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var mysql = require('mysql');
var fs = require('fs');
//모듈 설정 mysql  , DB연결


//mysql test
// var client = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '1234',
//     database: 'management',
// });

//서버생성
const app = express();


//미들웨어  json형식으로 데이터 주고받을예정
app.use(bodyParser.json());                 //body영역에 데이터를 보낼때 json으로 보내주세요~ 기능
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);








const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

connection.connect();

//mysql test
app.get('/api/customers', function (req, res) {

    connection.query(
        "SELECT * FROM CUSTOMER", (error, rows, field) => {
            res.send(rows);
        }
    )

});
//서버포트지정
app.listen(55555, function () {
    console.log('listening on http://127.0.0.1:55555')
});









