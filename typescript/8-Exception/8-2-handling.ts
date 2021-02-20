{
  class NetworkClient {
  tryConnect(): void {
    throw new Error ('no network!')
  }
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