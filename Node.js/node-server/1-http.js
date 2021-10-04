const http = require('http')
const fs = require('fs')

// how to install nodemon : 글로벌로 설치하기
// sudo npm i nodemon -g 

// how to run server with nodeon
// nodemon 1-http.js

const server = http.createServer((req, res) => {
  const url = req.url
  res.setHeader('Content-Type', 'text/html')
  if(url === '/') {
    // res.write('<html>')
    // res.write('<head><title>Academy</title></head>')
    // res.write('<body><h1>Welcome!</h1></body>')
    // res.write('</body>')
    // res.write('</html>')
    fs.createReadStream('./html/index.html').pipe(res)
  } else if (url === '/course') {
    // res.write('<html>')
    // res.write('<head><title>Course</title></head>')
    // res.write('<body><h1>Course!</h1></body>')
    // res.write('</body>')
    // res.write('</html>')
    fs.createReadStream('./html/course.html').pipe(res)

  } else {
    // res.write('<html>')
    // res.write('<head><title>NotFound</title></head>')
    // res.write('<body><h1>NotFound!</h1></body>')
    // res.write('</body>')
    // res.write('</html>')
    fs.createReadStream('./html/404.html').pipe(res)
  }
  // pipe로 html 파일을 호출할때는 res.end()가 필요 없다
  // res 객체는 writeStream을 상속하고 있고 end 메서드가 포함되어있음
  // pipe가 끝나면 자동으로 end()처리가 됨 
  // res.end()
})

server.listen(8080)