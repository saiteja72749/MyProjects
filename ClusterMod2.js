const cluster = require("cluster");
const http = require('node:http');
const os = require('node:os')
console.log(os.cpus().length)

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker process ${process.pid} is running`);

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("homepage");
  } else if (req.url === '/slowpage') {
    for (let i = 0; i <= 60000000; i++) {}
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("slow page");
  }
});

server.listen(3000, () => console.log('server'));

}
