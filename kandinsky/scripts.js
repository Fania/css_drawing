'use strict';

console.log('hello');

const us = document.querySelectorAll('u');
const xs = document.querySelectorAll('x');
const zs = document.querySelectorAll('z');

console.log(us);
console.log(xs);
console.log(zs);

// 11, 12, 21, 22, 24
console.log(us[10],us[11],us[20],us[21],us[23]);

const rower = [us[10],us[11],us[20],us[21],us[23]];



// p {
//   animation-duration: 3s;
//   animation-name: slide-in;
//   animation: 3s infinite alternate slide-in;
// }

// @keyframes row {
//   from {
//     translate: 150vw 0;
//     scale: 200% 1;
//   }

//   to {
//     translate: 0 0;
//     scale: 100% 1;
//   }
// }