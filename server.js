const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("Welcome to our home page");
      break;
    case "/about":
      res.end("Welcome to About us page");
      break;
    case "/node":
      res.end("Welcome to my Node.js project");
      break;
    default:
      res.end("Page not found");
  }
});

server.listen(4000, () => {
  console.log("Listening on port 4000");
});
