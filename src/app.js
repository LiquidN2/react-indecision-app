// import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp options={['item one', 'item two']}/>, document.getElementById('app'));
