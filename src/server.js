//const http = require('http');

//const hostname = '127.0.0.1'; // 127.0.0.1 = localhost , từ 1 -> 255 là địa chỉ IP của máy tính,
//const port = 3000; // từ 0 -> 65535 là cổng, 
                   // nhưng 0 -> 1023 là cổng mặc định của hệ thống, nên thường dùng từ 1024 trở lên để tránh xung đột với các dịch vụ khác đang chạy trên máy tính.

//const server = http.createServer((req, res) => {
//res.statusCode = 200;
//res.setHeader('Content-Type', 'text/plain');
//res.end('Hello World\n lalalalalalalalalalalalalalalalalalalalalalala');

//});

//server.listen(port, hostname, () => {
    //console.log(`Server running at http://${hostname}:${port}/`)
//}); 

const express = require('express')
const path = require('path')
require('dotenv').config()
//import express from 'express'; //es modules

//console.log(process.env)

const app = express () // Khởi tạo một Express app bằng cách gọi hàm express(). Biến app sẽ đại diện cho ứng dụng của bạn và được sử dụng để định nghĩa các route và cấu hình khác cho server.
const port = process.env.PORT || 8081 // port
const hostname = process.env.HOST_NAME || 'localhost' // hostname

//config template engine
app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'ejs')

//khai báo route 
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/frog', (req, res) => {
   res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console. log( `Example app listening on port ${port}` )
})