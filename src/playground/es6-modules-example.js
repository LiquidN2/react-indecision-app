console.log('React app is running!');

import subtractFunc, {square, add} from './utils';
console.log(square(5));
console.log(subtractFunc(20, 6));

import isSenior, {isAdult, canDrink} from './person';
console.log(isAdult(20));
console.log(canDrink(15));
console.log(isSenior(65));