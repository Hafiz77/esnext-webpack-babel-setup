import ReactDOM from 'react-dom';
import React from 'react';

import HelloWorld from './es2015/HelloWorld';
import Counter from './react-components/Counter';

var greet = new HelloWorld();

greet.sayHello();

ReactDOM.render(<Counter count={10}/>, document.querySelector('#react-components'))