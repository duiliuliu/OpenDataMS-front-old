import React from 'react';
import 'ant-design-pro/dist/ant-design-pro.css'; // 统一引入样式
import { BrowserRouter } from "react-router-dom";
import Layout from "./component/layout/MyLayout";
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;