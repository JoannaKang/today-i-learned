import express, { urlencoded } from 'express'
import postRouter from './router/post.js'
import userRouter from  './router/user.js'

// 유용한 미들웨어 패키지
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'

const app = express()


// 유용한 미들웨어
app.use(express.json()) // REST API의 body parsing
app.use(cookieParser()) // 쿠키 정보 확인
app.use(morgan('combined')) // 서버의 로그를 남기고 싶을때
app.use(express.urlencoded({extended:false})) // HTML Form에서 발생한 요청을 Body로 파싱
app.use(express.static('public')) // 경로를 지정해주면 해당 경로 안의 html 요소들에 접근하게 함
// avoid cors error
app.use(cors({
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200,
  credentials: true
}))
app.use(helmet()) // 보안에 관련된 헤더를 설정 

// Good
app.use('/posts', postRouter)
app.use('/users', userRouter)

app.listen(3000)

// Bad
// app
//   .route('/posts')
//   .get((req, res, next) => {
//     res.status(201).send('GET: /posts')
//   })
//   .post((req, res) => {
//     res.status(201).send('POST: /posts')
//   })