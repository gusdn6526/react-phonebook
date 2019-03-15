import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  // 우리가 만든 컴포넌트를 불러올 때는 이렇게 import 를 사용해서 불러와줍니다
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
/*
그리고 브라우저 상에 우리의 리액트 컴포넌트를 보여주기 위해서는 ReactDOM.render 함수를 사용합니다.
첫번째 파라미터는 렌더링 할 결과물이고, 
두번째 파라미터는 컴포넌트를 어떤 DOM 에 그릴지 정해줍니다.
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
