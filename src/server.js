const express = require('express')
const path = require('path')
require('dotenv').config()

const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')

const app = express () // Khởi tạo một Express app bằng cách gọi hàm express(). Biến app sẽ đại diện cho ứng dụng của bạn và được sử dụng để định nghĩa các route và cấu hình khác cho server.
const port = process.env.PORT           // port
const hostname = process.env.HOST_NAME  // hostname

//config request body
//Lấy data từ client gửi lên server thông qua body của request.
app.use(express.json());                            // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true }));    //Parse URL-encoded bodies

//config template engine
configViewEngine(app)

//khai báo route 
// app.use('/test', webRoutes) 
app.use('/', webRoutes) 

// const connection = mySql.createConncetion({
//     host: process.env.DB_HOST ,
//     port: process.env.DB_PORT,         //default 3306
//     user: process.env.DB_USER,         //default empty
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// })


app.listen(port, hostname, () => {
    console. log( `Example app listening on port ${port}` )
})