const http = require('http')
const fs = require('fs')
const { runInNewContext } = require('vm')

const name = 'Joanna'
const courses = [{name: 'HTML'}, {name: 'CSS'}, {name: 'JS'}, {name: 'node'}, {name: 'ts'}]

const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method

  if(url === '/course') {
    if(method === 'GET') {
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(courses))
    } else if (method === 'POST') {
      const body = []
      req.on('data', (chunk) => {
        console.log(chunk)
        body.push(chunk)
      })
      // 유저의 입력이 모두 받아지는 이벤트
      req.on('end', () => {
        const bodyStr = Buffer.concat(body).toString()
        const course = JSON.parse(bodyStr)
        courses.push(course)
        console.log(course)
        // 클라이언트에 응답 코드를 보내준 후 종료
        res.writeHead(201)
        res.end()
      })
    }
  }
})

server.listen(8080)