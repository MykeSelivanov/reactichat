import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./store";
import reportWebVitals from './reportWebVitals';
// import registerServiceWorker from "./registerServiceWorker";

function fancyLog() {
  console.log("%c Rendered with 👉 👉 👇", "background: blue; color: #FFF");
  console.log(store.getState());
}

const render = () => {
  fancyLog();

  return ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
};

render();
store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
