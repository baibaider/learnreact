import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Todulist from './Todulist'; //当前目录下的App.js ，App.js 是对一个组件的定义
import './style.css'
//import registerServiceWorker from './registerServiceWorker'; //pwa ，离线页面应用

ReactDOM.render(<Todulist />, document.getElementById('root')); //ReactDOM将App组件渲染到id为root的位置
//registerServiceWorker();
//App.test.js  是jest自动化测试使用的文件