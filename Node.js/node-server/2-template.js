const http = require('http')
const fs = require('fs')
const ejs = require('ejs')

const name = 'Joanna'
const courses = [{name: 'HTML'}, {name: 'CSS'}, {name: 'JS'}, {name: 'node'}, {name: 'ts'}]

const server = http.createServer((req, res) => {
  const url = req.url
  res.setHeader('Content-Type', 'text/html')
  if(url === '/') {
    ejs
      .renderFile('./template/index.ejs', {name})
      .then(data => res.end(data))
  } else if (url === '/course') {
    ejs
    .renderFile('./template/course.ejs', {courses})
    .then(data => res.end(data))
  } else {
    ejs
    .renderFile('./template/404.ejs', {name})
    .then(data => res.end(data))
  }
})

server.listen(8080)