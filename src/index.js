var _ = require('lodash');

import './css/style.css';
import './css/hello.scss';

import {area, circumference} from './js/circle';
//default import 는 {}가 없고, 이름 맘대로
import a from './js/cube';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack2'], ' ');

  return element;
}

document.body.appendChild(component());

console.log(area(3), circumference(10) );
console.log(a(10));