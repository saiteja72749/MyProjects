const http = require('node:http');
const {Worker} = require('node:worker_threads')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("homepage");
  } else if (req.url === '/slowpage') {
    const worker = new Worker('./worker-thread.js')
    worker.on('message',(j)=>{
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`slow page ${j}`);
    })
      
  }
});

server.listen(3002, () => console.log('server'));
