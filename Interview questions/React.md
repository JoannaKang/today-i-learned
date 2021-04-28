# Server side rendering vs Client side rendering

1. Client side rendering

- Getting a bare-bones HTML documentss with a Javascript file that will render the rest of the site using the browser.
- Server is only responsible for loading the HTML & static files, serve additional resources upon user's interaction
- Using external libraries or frameworks like React || Vue || Angular

| Pros                                            | Cons                                  |
| ----------------------------------------------- | ------------------------------------- |
| Cheaper option for server                       | Bad for SEO                           |
| Interaction speed is faster after first loading | Initial load might require more time. |

2. Server side rendering

- website’s JavaScript is rendered on the website’s server.

| Pros                                                        | Cons                       |
| ----------------------------------------------------------- | -------------------------- |
| search engine bots and humans get a faster page experience. | Frequent server requests   |
| The initial page load is faster                             | Frequent server requests   |
| Great for static sites                                      | Non-rich site interactions |

2. What is next.js

- Framework that helps React implement Server side rendering
- 참고: https://ivorycode.tistory.com/entry/Nextjs%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0

3. What is virtual DOM

- lightweight JavaScript object which originally is just the copy of the real DOM.
- Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.
- Then the difference between the previous DOM representation and the new one is calculated
- Once the calculations are done, the real DOM will be updated with only the things that have actually changed.

4. What is event cycle of React

- React components are created by being mounted onto the DOM, they change or grow through updates, and finally, they can be removed or unmounted from the DOM.
  - Initial Rendering Phase: This is the phase when the component is about to start its life journey and make its way to the DOM.
  - Updating Phase: Once the component gets added to the DOM, it can potentially update and re-render only when a prop or state change occurs. That happens only in this phase.
  - Unmounting Phase: This is the final phase of a component’s life cycle in which the component is destroyed and removed from the DOM.

5. What is component

- Component is the building block of a React application.
- Component split up the entire UI into small independent and reusable pices, each components are independent of each other without affecting the rest of the UI

6. what is Props

- Props is shorthand for Properties,read-only components which must be kept immutable.
- Props are always pass down from the parent to the child components throughout the application.

7. what is state

- State is a JavaScript object that represents the part of a component that can change based on a resultant action of a user.
- State is directly initialized and managed by the component.

6. What is JSX

- JSX is a syntax extension to JavaScript, embedding HTML code in Javascript code
- JSX is a XML-like syntax extension, it provides syntactic sugar for the React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax.

7. Type of hooks

- Hooks are functions that let you “hook into” React state and lifecycle features from function components.
- It allows you to use state and other React features without writing a class
  - useState: declaring the state variable for the component, initilalizing the state
  - useEffect: change state of component, re-render the component
  - useContext: The Context API is a React structure that allows you to share specific data from all levels of your application and aids in solving prop-drilling.

8. What is state management? experience of Redux?

- State management: State management is a way to communicate and share data across components.
- Redux: Tool for the React state management which enables to cotrol states in global level.
  - actions: when event happen, send data from application to Redux store -> by store.dispatch()
  - store: holds the application state.
  - reducers: Pure functions that take the current state of an application, perform an action, return new state
