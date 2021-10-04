# What is REST api?

- Representational State Transfer
- 웹 서비스를 만들때 지켜야 할 가이드라인
- 조건
  1. 다양한 클라이언트에 정보를 제공할 수 있는 구조를 유지해야함
  2. Statelessness: 하나의 요청이 다른 요청과 연관되지 않는 통신형태
  3. Cacheability: 캐시가 가능한 형태로 설계
  4. Layered System: 뒷단에 서버의 구조와는 무관하게 공통된 api를 사용해야 한다
  5. Code on demand: 클라이언트로 서버에서 코드를 보내줄 수 있다
  6. Uniform interface
  - 서버는 클라이언트가 이해할 수 있는 형태로 데이터를 보내줘야함
  - 서버를 통해 받은 데이터를 클라이언트 단에서 처리 후 어떻게 서버가 다시 요청을 받아 처리할수 있는지 알 수 있어야 함
  - 서버에서 데이터를 보낼때 클라이언트가 어떻게 처리해야하는지를 명시하고 있어야 함
  - Hypermedia as the engine of applicate state(HATEOAS): 클라이언트가 특정 액션을 수행할때 서버에 어떤 Url로 요청을 보내야하는지 모든 링크 정보를 제공한다 (like journey api!😳)

# Designing web apis
1. Create - Post
2. Read - Get
3. Update - Put
4. Delete - Delete

-> 관심있는 데이터로 / 무엇을 할건지 순서로 api를 디자인한다