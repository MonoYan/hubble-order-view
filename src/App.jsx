import React from 'react';
import { ConfigProvider } from 'antd';
import MainLayout from './layouts/MainLayout';
import 'antd/dist/reset.css'


const App = () => {
  return (
    <ConfigProvider>
      <div className="app">
        <MainLayout />
      </div>
    </ConfigProvider>
  );
};

export default App;