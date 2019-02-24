import React from 'react';
import { Provider } from 'react-redux';
import Layout from "./component/layout/MyLayout";
import store from "./store"
import 'ant-design-pro/dist/ant-design-pro.css'; // 统一引入样式
import './style/App.css';


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