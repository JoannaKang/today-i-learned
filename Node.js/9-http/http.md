# https 통신이란

- 클라이언트와 서버가 정보를 주고받는 방식
  - 클라이언트와 서버는 TCP Connection을 통해 연결됨
  - 클라이언트는 GET/POST/DELETE/MODIFY 에 관련된 요청을 보내면서 header에 여러가지 관련 정보들을 실어서 서버에 전송
  - 서버는 클라이언트로부터 받은 요청을 처리 후 처리 결과에 따라 Status code를 리턴해줌 (ex-200, 300...)

# http vs https

- http: 정보를 주고받을때 정보가 암호화되어있지 않음
- https: 보안이 좀 더 개선된 프로토콜
  - https v2: 여러 파일을 동시에 전송 가능
  - https v3: UDP를 베이스로 업데이트된 방식..?

# Status code

- 1xx: Informational
  - 100: continue
  - 102: processing
- 2xx: Successful
  - 200: Ok
  - 201: Created
  - 204: No contents
- 3xx: Redirection
  - 301: Moved
  - 302: Found
  - 303: See other -> When get request
  - 307: Temporary Redirect -> Same methods
  - 308: Permanent Redirect -> Same methods
- 4xx: Client error
  - 400: Bad request
  - 401: Unauthorized
  - 403: Forbidden
  - 404: Not found (원하는 url이 없을때)
  - 405: Method not allowd (해당 url에서 쓰거나 삭제하는게 허용되지 않는 경우)
  - 409: Conflict (클라이언트가 만들려는 리소스가 이미 존재할 때)
- 5xx: Server error
  - 500: Internal Server Error -> 서버 내부에서 요청을 처리할수 없음
  - 502: Bad gateway -> 중간에 있는 서버가 해당 요청을 어떻게 처리해야할지 모르는 경우
  - 503: Service unavailable -> 아직 서버가 준비되지 않은 경우

# Request Methods

- GET: get -> 200
- POST: create -> 201
- PUT: replace -> 200 or 204
- DELETE: delete -> 200 or 204
- PATCH: replace partially
- HEAD: get without body
- OPTIONS: all supported methods for url
- TARCE: echoes the received request

- Idempotent(멱등성): 동일한 요청을 한 번 보내는 것과 여러번 연속으로 보내는 것이 같은 효과를 지니고, 서버의 상태도 동일하게 남을 때 해당 HTTP 메서드가 멱등성을 가졌다고 한다.
  - GET, DELETE, PUT, HEAD는 멱등성을 가지며 POST는 아님


# Http Header
* 특징
   1. Stateless Protocol:클라이언트가 서버에게 보내는 요청들은 서로 연관되어있지 않다
   2. Session & Cookies: 클라이언트에서 서버에 로그인하게 되면 서버는 유저를 식별할 수 있는 쿠키를 헤더에 담아서 리턴하고, 브라우저가 쿠키를 저장해둠. 다음에 서버에 요청을 보낼때 쿠키를 헤더에 넣어서 보내면 서버는 쿠키값에 기반해 같은 유저인것을 알 수 있음
    * 헤더에 포함되는 정보들
       - standard: Authorization, Browser information, cache-control
       - custom: domain-key, domian.key
