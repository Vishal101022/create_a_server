const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello World");
})

server.listen(4000, () => {
    console.log("Listening on port 4000");
})