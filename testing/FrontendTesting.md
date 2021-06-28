1. 테스팅 관련 용어

- spy: 함수 실행여부를 기록 (이 액션을 통해 내가 원하는 함수가 실행되었는지를 체크)
- stubbing: 어떤 함수를 스파이하면서 함수의 로직을 오버라이딩 시킬 때? -> 이벤트 유닛테스트할때 쓴다
- mock: 어떤 함수의 implementation을 대체
- assertion: 내가 원하는 결과를 받고 있는가를 확인하는 기능
- snapshot test: 어떤 컴포넌트가 렌더링 될 때 어떤 아웃풋이 나오는지 파일로 기록해줌
- instrumentation: 테스트 코드 커버리지를 계산하려고 내 코드베이스 전체 라인에서 몇줄이 실행되는지, 각 라인에서 몇번 실행되는지 측정하기 위해 모든 파일을 wrapping하는 과정

2. 유닛/통합 테스트를 위한 요소들

- Structure Providers: 테스트 케이스 조합, 순서를 맞출 수 있도록 global 함수를 제공
  - describe()
  - test()
  - it()
- Assertion Libraries: 어떤 테스트가 원하는 결과를 받고 있는지 util 함수를 제공해주는 라이브러리

3. Jest + Enzyme 조합의 테스팅

- Example component

```
import React from "react";
import { useSelector } from "react-redux";

const TestComponent = (props) => {
  const { onChange, onSubmit } = props;
  const testString = useSelector((state) => state.testString);

  function handleSubmit() {
    console.log("submitted!");
    onSubmit();
  }

  return (
    <div>
      <h1>{testString}</h1>
      <input type="text" onChange={onChange} />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TestComponent;
```

- Testing code

1. snapshot testing

```
import React from "react";
import { configure, shallow } from "enzyme";
import { useSelector } from "react-redux";

import TestComponent from "./TestComponent";

describe("TestComponent", () => {
  it("should render component", () => {
    const component = shallow(<TestComponent {...props} />);
    // enzyme에서 렌더해 주는 컴포넌트의 snapshot 생성하고 비교하기
    expect(component).toMatchSnapshot();
  });
});
```

2. event handling

```
import { shallow } from 'enzyme';

import TestComponent from './TestComponent';

it('should handle click events', () => {
    // 1. onClick 이멘트에서 호출하는 console.log를 spy하기 🕵️‍♂️
    const spy = jest.spyOn(console, 'log');
    const component = shallow(<TestComponent />);

    // 2. Enzyme에서 제공하는 selector로 find 후 클릭 이벤트 호출
    component.find('button').simulate('click');

    // 3. spy를 통해 원하는 함수를 호출되었는지 확인
    expect(spy).toBeCalled();
});

it('should handle input change', () => {
    // 1. jest.fn()통해 간단한 stub을 만들고
    const handleChange = jest.fn();
    const component = mount(<TestComponent onChange={handleChange} />);

    // 2. onChange 이벤트를 호출
    component.find('input').simulate('change', { target: { value: 'Test value' } });

    // 3. props로 넘긴 핸들러 호출되었는지 확인
    expect(handleChange).toBeCalled();
  });
```

3. mock data testing

```
import { shallow } from 'enzyme';

// 1. 원본 라이브러리 임포트
import { useSelector } from 'react-redux';
import TestComponent from './TestComponent';

// 2. 라이브러리 mocking해서 useSelector의 로직이 기본 `jest.fn()`로 stubbing하기
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

//...
describe("TestComponent", () => {
  it('renders "TEXT A"', () => {
    const testResult = 'TEXT A';
    // 3.1 원하는 테스트에서 응답 값이 mocking
    useSelector.mockReturnValue(testResult);
    const component = mount(<TestComponent />);

    const title = component.find('h1').text();
    expect(title).toBe(testResult);
  });
  it('renders "TEXT B"', () => {
    const testResult = 'TEXT B';
    // 3.2 원하는 테스트에서 응답 값이 mocking
    useSelector.mockReturnValue(testResult);
    const component = mount(<TestComponent />);

    const title = component.find('h1').text();
    expect(title).toBe(testResult);
  });
});
```
