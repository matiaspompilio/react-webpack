import React from 'react';
import ReactDOM from 'react-dom';
import style from './styles/styles.less';

const template = <div className={style.header}>My Header Text</div>;

ReactDOM.render(template, document.getElementById('root'));