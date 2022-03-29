import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);


// 리액트 컴포넌트에서 스토어를 사용할 수 있도록 App 컴포넌트를 react-redux에서 제공하는 Provider
// 컴포넌트로 감싸준다. 이 컴포넌트를 사용할때 store는 props로 전당해 주어야한다. 