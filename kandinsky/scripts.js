'use strict';

console.log('hello');

const us = document.querySelectorAll('u');
const xs = document.querySelectorAll('x');
const zs = document.querySelectorAll('z');

// console.log(us);
// console.log(xs);
// console.log(zs);

// u 11, 12, 21, 22, 25, 26, 63
// x 9
const anims = [us[10],us[11],us[20],us[21],us[24],us[25],us[62],xs[8]];
console.log(anims);

const rower = [us[10],us[11],us[20],us[21],us[23]];
console.log(rower[0].style.animationPlayState == 'running');


document.addEventListener("click", () => {
  anims.forEach(anim => {
    console.log(anim.style.animationPlayState);
    if(anim.style.animationPlayState == 'paused') {
      anim.style.animationPlayState = 'running';
    } else {
      anim.style.animationPlayState = 'paused';
    }
  });
});










// const { closeSync } = require("fs");

// let fawn_canvas = document.getElementById('fawn_canvas');
// let fawn_stream = document.getElementById('fawn_stream');
// let fawn_svg = document.getElementById('fawn_svg');
// let fctx = fawn_canvas.getContext('2d');
// let cx,cy;
// let lastHandPosX,lastHandPosY;
// let currHandElem;
// let fawn_svg_box = document.getElementById('fawn_svg').getBoundingClientRect();



// function startMotion() {
//   fawn_camera.start();
// }
// function stopMotion() {
//   fawn_camera.stop();
// }


// function onResults(handData) {
//   // console.log(fawn_svg.offsetWidth, fawn_svg.offsetHeight);
//   drawHandPositions(handData);
// }

// function drawHandPositions(handData) {
//   const canvas = fawn_canvas;
//   const stream = fawn_stream;
//   const box = fawn_svg_box;
//   const ctx = fctx;

//   canvas.width = stream.offsetWidth;
//   canvas.height = stream.offsetHeight;
//   // canvas.width = box.width;
//   // canvas.height = box.height;
//   // canvas.height = 1062 * stream.offsetWidth / 1500;
//   // for aspect ration 4:3 = 3 * window.innerWidth / 4
//   // 1500 / 1062
//   // canvas.height = 1062 * stream.offsetWidth / 1500;

//   ctx.save();
//   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//   ctx.drawImage(
//       handData.image, 0, 0, ctx.canvas.width, ctx.canvas.height);

//   if (handData.multiHandLandmarks) {
//     for (const landmarks of handData.multiHandLandmarks) {

//       let landCopy = landmarks;
//       let landmarksAtIndex = landCopy.at(8);
//       let landmarksWithOnlyIndex = [landmarksAtIndex];
//       // console.log('landmarks',landmarks);
//       // console.log('landmarksAtIndex',landmarksAtIndex);
//       // console.log('landmarksWithOnlyIndex',landmarksWithOnlyIndex);

//       drawConnectors(ctx, landmarks, HAND_CONNECTIONS,
//                     {color: '#00FF00', lineWidth: 3});
//       drawLandmarks(ctx, landmarks, {color: '#7bf8fc', lineWidth: 1});
//       drawLandmarks(ctx, landmarksWithOnlyIndex, {color: '#FFFFFF', lineWidth: 1, radius: Math.abs(25 * landmarksWithOnlyIndex[0].z + 15)});

//       // "5" is index finger mid joint point
//       // "8" is index finger tip
//       let xFlipped = Math.round(landmarks[8].x * ctx.canvas.width);
//       let xUnFlipped = Math.abs(xFlipped - ctx.canvas.width);
//       lastHandPosX = xUnFlipped;
//       lastHandPosY = Math.round(landmarks[8].y * ctx.canvas.height);
//       // console.log('original','x',xFlipped,'y',lastHandPosY);
//       console.log('inverse','x',lastHandPosX,'y',lastHandPosY);
//       currHandElem = document.elementFromPoint(lastHandPosX,lastHandPosY);
//       if(currHandElem && currHandElem !== null) {
//         if(currHandElem.tagName === 'path') {
//           // handleSolids(currHandElem);
//           console.log(currHandElem);
//           // handleColourReplacement(currHandElem);
//         }
//       }
//     }
//   } 
//   // else {
//   //   idleLoop();
//   //   console.log('no hand data');
//   // }
//   ctx.restore();
// }



// const hands = new Hands({locateFile: (file) => {
//   return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
//   // return `data/${file}`;
// }});
// hands.setOptions({
//   maxNumHands: 2,
//   modelComplexity: 1,
//   minDetectionConfidence: 0.5,
//   minTrackingConfidence: 0.5
// });
// hands.onResults(onResults);

// const fawn_camera = new Camera(fawn_stream, {
//   onFrame: async () => {
//     await hands.send({image: fawn_stream});
//   },
//   width: fawn_svg_box.width,
//   height: fawn_svg_box.height,
//   aspectRatio: 1.41
// });
