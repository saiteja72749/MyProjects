const http = require('http');
const fs = require('node:fs')

const server = http.createServer((req, res) => {

const name = "Sai Teja"
res.writeHead(200, { "Content-Type": "text/html" });          //http template
let html = fs.readFileSync('Built-in Modules/HttpHtml.html','utf-8')
html = html.replace("{{name}}",name)

if(req.url=='/'){
  res.writeHead(200,{'Content-Type':"text/plain"})
  res.end("home page")
}else if(req.url=='/about'){
  res.writeHead(200,{'Content-Type':"text/plain"})
  res.end("about page")
}else if(req.url=='/api'){
  res.writeHead(200,{'Content-Type':"application/json"})
  res.end(JSON.stringify({
    "name":"sai teja",
    "clg":"mrec"
  }))
}else if(req.url=='/html'){
  res.writeHead(200,{'Content-Type':'text/html'})
  res.end(html)
}else{
  res.writeHead(404)
  res.end("Page Not Found")
}

// const obj = {
//   "name":"sai teja",           //json response
//   "clg":"mrec"
// }

// const obj1 = [             //json response
//   "name","sai teja",
//   "clg","mrec"
// ]

  // res.writeHead(200, { "Content-Type": "application/json" });       //json response
  // res.end(JSON.stringify(obj));
  // res.end(JSON.parse(obj))

  
  // res.end(html)

  // res.end("<h1>Hello-World</h1>")         //html response
  // fs.createReadStream(__dirname+'Built-in Modules/HttpHtml.html').pipe(res)
});

server.listen(3003, () => {
  console.log("Server is running");
});
