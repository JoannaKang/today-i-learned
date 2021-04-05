# 0. Commands

- npm run compile - compile the ES6 Typescript into the /lib directory
- npm run lint - run the Typescript linter using the tslint.json config file.
- npm test - run the tests using the local .mocharc.json config file. As the config \* includes the Typescript transpilation hook ts-node/register it does not require pre-compilation before running.

# 1. In package.json

```
{
  "name": "test-typescript",
  "version": "1.0.0",
  "description": "test prepration",
  "main": "checksum.ts",
  "scripts": {
    /// test compiler option 생성해주기
    "test": "env TS_NODE_COMPILER_OPTIONS='{\"module\": \"commonjs\" }' mocha"
  },
  "author": "sooyeon kang",
  "license": "ISC",
  "dependencies": {
    "mocha": "^8.3.2",
    "ts-mocha": "^8.0.0"
  },
  "devDependencies": {
    "@types/mocha": "^8.2.2"
  }
}
```

# 2. compile ts file

```
tsc
npm test // package.json 안의 test code가 실행됨
```

https://github.com/mochajs/mocha-examples/tree/master/packages/typescript
