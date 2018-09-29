import React from 'react';
import logo from './logo.svg';
import 'ant-design-pro/dist/ant-design-pro.css'; // 统一引入样式
import PagesHeader from './component/PageHeader';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <PagesHeader/>
      </div>
    );
  }
}

export default App;