// @flow Created by 陈其丰 on 2018/4/17.

import React from 'react';
import ReactDOM from 'react-dom';
import 'style'
import './index.scss'

let str = '<script>alert(1)</script>';

ReactDOM.render(
    <div>
        {str}
    </div>
    ,
    document.getElementById('root')
);