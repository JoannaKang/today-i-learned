type SuccessState = {
  result: 'success';
  response: {
    body: String;
  };
}

type FailState = {
  result: 'fail';
  reason: string;
}

type LoginState = SuccessState | FailState
function login() { //:Promise<LoginState> 프로미스를 리턴하는 경우는 이렇게
  return {
    result: 'success',
    response: {
      body: 'logged in!'
    }
  }
}

// printLoginStatus(state)
// success -> body
// fail -> reason
function printLoginStatus (state: LoginState) {
  state.result //success or fail
  if (state.result === 'success') {
    console.log(`🥳${state.response.body}`);
  } else {
    console.log(`😥${state.reason}`);
  }
}