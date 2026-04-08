const http = require('http');

const hostname = '127.0.0.1'; // 127.0.0.1 = localhost , từ 1 -> 255 là địa chỉ IP của máy tính,
const port = 3000; // từ 0 -> 65535 là cổng, 
                   // nhưng 0 -> 1023 là cổng mặc định của hệ thống, nên thường dùng từ 1024 trở lên để tránh xung đột với các dịch vụ khác đang chạy trên máy tính.

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World\n lalalalalalalalalalalalalalalalalalalalalalala');

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});    