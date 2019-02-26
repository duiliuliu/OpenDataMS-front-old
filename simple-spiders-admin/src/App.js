import React from 'react';
import { Provider } from 'react-redux';
import Layout from "./container/home/Layout";
import configureStore  from "./store"
import rootSaga from './sagas/sagas'
import 'ant-design-pro/dist/ant-design-pro.css'; // 统一引入样式
import './style/App.css';

const store = configureStore(window.__INITIAL_STATE__)
store.runSaga(rootSaga)

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        <Layout />
        </Provider>
      </div>
    );
  }
}

export default App;