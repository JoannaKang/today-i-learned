{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  type NetworkErrorState = {
    result: 'fail',
    reason: 'Offline' | 'Server down' | 'timeout'; 
  }

  type SuccessState = {
    result: 'success'
  }
  type ResultState = SuccessState | NetworkErrorState

  class NetworkClient {
    // tryConnect(): void {
    //   throw new Error ('no network!')
    // }

    // 왜 Connect 가 실패했는지 이유를 알려줄 수 있게 만드는게 좋다
    tryConnect(): ResultState {}
  }

class UserService {
  constructor (private client: NetworkClient) {}

  login() {
    this.client.tryConnect();
    //login...
  }
}

class App {
  constructor(private userService: UserService) {}
  run() {
    try {
      this.userService.login()
    } catch (error) {
      // show dialog to user
      // 좀 더 유저에게 의미있는 정보를 줄 수 있을 때 try / catch를 사용한다
      console.log(error)
    }
  }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();
}