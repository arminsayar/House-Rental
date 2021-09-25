const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, './', 'index.html'), "UTF-8", function (err, html) {
            res.writeHead(200, { "Content-Type": "text/html" });
            console.log(`Your request method is: ${req.method} and your requested url is ${req.url}.`);
            res.end(html);
        });
    } else if (req.url.match(".css")) {
        let cssPath = path.join(__dirname, './', req.url);
        let fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/css" });
        console.log(`Your request method is: ${req.method} and your requested url is ${req.url}.`);
        fileStream.pipe(res);
    } else if (req.url.match(".png")) {
        let imagePath = path.join(__dirname, './', req.url);
        let fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/png" });
        console.log(`Your request method is: ${req.method} and your requested url is ${req.url}.`);
        fileStream.pipe(res);
    } else if (req.url.match(".jpg")) {
        let imagePath = path.join(__dirname, './', req.url);
        let fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/jpg" });
        console.log(`Your request method is: ${req.method} and your requested url is ${req.url}.`);
        fileStream.pipe(res);
    } else if (req.url.match(".webp")) {
        let imagePath = path.join(__dirname, './', req.url);
        let fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/webp" });
        console.log(`Your request method is: ${req.method} and your requested url is ${req.url}.`);
        fileStream.pipe(res);
    } else if (req.url.match(".woff2")) {
        let imagePath = path.join(__dirname, './', req.url);
        let fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "font/woff" });
        console.log(`Your request method is: ${req.method} and your requested url is ${req.url}.`);
        fileStream.pipe(res);
    } else if (req.url.match(".svg")) {
        let imagePath = path.join(__dirname, './', req.url);
        let fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/svg+xml" });
        console.log(`Your request method is: ${req.method} and your requested url is ${req.url}.`);
        fileStream.pipe(res);
    } else if (req.url.match(".js")) {
        let jsPath = path.join(__dirname, './', req.url);
        let fileStream = fs.createReadStream(jsPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/javascript" });
        console.log(`Your request method is: ${req.method} and your requested url is ${req.url}.`);
        fileStream.pipe(res);
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        console.log(`Your request method is: ${req.method} and your requested url is ${req.url}.`);
        res.end(`404 Not Found`);
    }
}).listen(3000);
