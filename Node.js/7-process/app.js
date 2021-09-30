const process = require('process')

console.log(process.execPath)
console.log(process.version)
console.log(process.pid)
console.log(process.ppid)
console.log(process.platform)
console.log(process.env)
console.log(process.uptime())
console.log(process.cwd())
console.log(process.cpuUsage())

setTimeout(() => {
  console.log('setTimeout')
}, 0)

// nextTick 안의 콜백함수를 태스크 큐 제일 높은 우선순위로 밀어넣는다
process.nextTick(() => {
  console.log('nextTick')
})

for (let i= 0; i < 100; i++) {
  console.log('in for loop')
}

// for loop 이 다 실행되고 나면 nextTick 안의 콜백함수가 먼저 실행된다