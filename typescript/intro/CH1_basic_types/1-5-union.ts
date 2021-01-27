{
  // * Union Types: OR
  type Direction = 'left'|'right'|'up'|'down';
  function move(direction: Direction) {
    console.log(direction)
  }
  move('down');

  type TileSize = 8 | 16 | 32; // 입력값을 특정 옵션들로만 제한해야 할 때
  const tile: TileSize = 16;

  // example function: login -> success, fail
  type SuccessState = {
    response: {
      body: String;
    };
  }

  type FailState = {
    reason: string;
  }

  type LoginState = SuccessState | FailState
  function login(id:string, password: string) { //:Promise<LoginState> 프로미스를 리턴하는 경우는 이렇게
    return {
      response: {
        body: 'logged in!'
      }
    }
  }

  // printLoginStatus(state)
  // success -> body
  // fail -> reason
  function printLoginStatus (state: LoginState) {
    if ('response' in state) {
      console.log(`🥳${state.response.body}`);
    } else {
      console.log(`😥${state.reason}`);
    }
  }
 }