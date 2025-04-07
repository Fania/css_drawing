'use strict';

// console.log('hello');

const us = document.querySelectorAll('u');
const xs = document.querySelectorAll('x');
const zs = document.querySelectorAll('z');

// console.log(us);
// console.log(xs);
// console.log(zs);



// u 11, 12, 21, 22, 25, 26, 27, 28, 29, 30, 31, 32, 33, 47, 54, 63
// x 9, 10
const anims = [us[10],us[11],us[20],us[21],us[24],us[25],us[26],us[27],us[28],us[29],us[30],us[31],us[32],us[46],us[53],us[62],xs[8],xs[9]];
// console.log(anims);

const rower = [us[10],us[11],us[20],us[21],us[23]];
// console.log(rower[0].style.animationPlayState == 'running');


document.addEventListener("click", () => {
  anims.forEach(anim => {
    // console.log(anim.style.animationPlayState);
    if(anim.style.animationPlayState == 'paused') {
      anim.style.animationPlayState = 'running';
    } else {
      anim.style.animationPlayState = 'paused';
    }
  });
});


