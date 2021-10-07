import express from 'express'
import fs from 'fs'
import fsAsync from 'fs/promises'
import {} from 'express-async-erros'

const app = express()

// app.get('/sky/:id', (req, res, next) => {
//   // res.json({ name: 'ellie' })
//   // res.sendStatus(400)
//   res.setHeader('key', 'value')
//   res.status(201).send('created')
// })

// 익스프레스의 미들웨어는 동기적으로 연결(현재 작업이 다 처리되어야 다음 작업으로 넘어간다)되어있다. 
// -> 각각의 app.get에서 에러가 발생하지 않는 한 final error handling에서 다루어지지 않음
// 에러처리는 각각의 미들웨어에서 해주는것이 좋다
app.get('/file1', (req, res) => {
  // 동기적으로 작동하는 예시
  try {
    const data = fs.readFileSync('/file.txt')
  } catch (error) {
    res.status(404).send('File not found')
  }
  // 비동기적으로 작동하는 예시 (비동기 코드는 내부에서 에러처리를 해주지 않으면 final error handling code는 에러를 감지할 수 없다)
  fs.readFile('file1/txt', (err, data) => {
    if (err) {
      res.status(404).send('File not found')
    }
  })
})

app.get('/file2', (req, res, next) => {
  // catch를 활용해서 에러를 잡아주어야 함
  // fsAsync.readFile('/file.txt').catch(next)
  // 혹은 'express-async-erros' 패키지를 활용한다 
  return fsAsync.readFile('/file.txt').catch(next)
})

app.get('/file2', async (req, res, next) => {
  try {
    // async await으로 선언된경우 동기적으로 프로미스를 활용하도록 선언된 것이므로 try catch를 사용할 수 있다?
    const data = await fsAsync.readFile('/file.txt')
  } catch (error) {
    res.status(404).send('File not found')
  }
})

// final error handling
app.use((error, req, res, next) => {
  console.log(error)
  res.status(500).json({message: 'Something went wrong'})
})

app.listen(3000)