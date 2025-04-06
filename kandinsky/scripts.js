'use strict';

// console.log('hello');

const us = document.querySelectorAll('u');
const xs = document.querySelectorAll('x');
const zs = document.querySelectorAll('z');

// console.log(us); // 74
// console.log(xs); // 10
// console.log(zs); // 2



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








// // Copyright 2023 The MediaPipe Authors.
// // https://codepen.io/mediapipe-preview/pen/vYrWvNg?editors=0110
// import { ObjectDetector, FilesetResolver } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2";
// let objectDetector;
// // Initialize the object detector
// const initializeObjectDetector = async () => {
//     console.log('starting up Object Detector');
//     const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2/wasm");
//     objectDetector = await ObjectDetector.createFromOptions(vision, {
//         baseOptions: {
//             modelAssetPath: `https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/float16/1/efficientdet_lite0.tflite`,
//             delegate: "GPU"
//         },
//         scoreThreshold: 0.5,
//         category_allowlist: [],
//         runningMode: "VIDEO"
//     });
// };
// initializeObjectDetector();
// let video = document.getElementById("webcam");
// function hasGetUserMedia() {
//     return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
// }
// // Keep a reference of all the child elements we create
// // so we can remove them easilly on each render.
// // var children = [];
// if (hasGetUserMedia()) {
//     enableCam();
// }
// else {
//     console.warn("getUserMedia() is not supported by your browser");
// }
// // Enable the live webcam view and start detection.
// async function enableCam(event) {
//     if (!objectDetector) {
//         console.log("Wait! objectDetector not loaded yet.");
//         return;
//     }
//     // getUsermedia parameters
//     const constraints = {
//         video: true
//     };
//     // Activate the webcam stream.
//     navigator.mediaDevices
//         .getUserMedia(constraints)
//         .then(function (stream) {
//         video.srcObject = stream;
//         video.addEventListener("loadeddata", predictWebcam);
//     })
//         .catch((err) => {
//         console.error(err);
//         /* handle the error */
//     });
// }
// let lastVideoTime = -1;
// async function predictWebcam() {
//     console.log('inside predictWebcam');
//     let startTimeMs = performance.now();
//     // Detect objects using detectForVideo.
//     if (video.currentTime !== lastVideoTime) {
//         lastVideoTime = video.currentTime;
//         const detections = objectDetector.detectForVideo(video, startTimeMs);
//         displayVideoDetections(detections);
//         console.log('should at least print this?');
//     }
//     // Call this function again to keep predicting when the browser is ready.
//     window.requestAnimationFrame(predictWebcam);
// }
// function displayVideoDetections(result) {
//     // Remove any highlighting from previous frame.
//     // for (let child of children) {
//     //     liveView.removeChild(child);
//     // }
//     // children.splice(0);
//     // Iterate through predictions and draw them to the live view
//     for (let detection of result.detections) {
//         // const p = document.createElement("p");
//         const prediction = 
//             detection.categories[0].categoryName +
//                 " - with " +
//                 Math.round(parseFloat(detection.categories[0].score) * 100) +
//                 "% confidence.";
//         // p.style =
//         //     "left: " +
//         //         (video.offsetWidth -
//         //             detection.boundingBox.width -
//         //             detection.boundingBox.originX) +
//         //         "px;" +
//         //         "top: " +
//         //         detection.boundingBox.originY +
//         //         "px; " +
//         //         "width: " +
//         //         (detection.boundingBox.width - 10) +
//         //         "px;";
//         // const highlighter = document.createElement("div");
//         // highlighter.setAttribute("class", "highlighter");
//         // highlighter.style =
//         //     "left: " +
//         //         (video.offsetWidth -
//         //             detection.boundingBox.width -
//         //             detection.boundingBox.originX) +
//         //         "px;" +
//         //         "top: " +
//         //         detection.boundingBox.originY +
//         //         "px;" +
//         //         "width: " +
//         //         (detection.boundingBox.width - 10) +
//         //         "px;" +
//         //         "height: " +
//         //         detection.boundingBox.height +
//         //         "px;";

//         // liveView.appendChild(highlighter);
//         // liveView.appendChild(p);
//         // // Store drawn objects in memory so they are queued to delete at next call.
//         // children.push(highlighter);
//         // children.push(p);

//         console.log(prediction);
//     }
// }










// function startMotion() {
//   // console.trace(`start Motiontracking ${motionState}`);
//   // console.log(fawn_svg.offsetWidth, fawn_svg.offsetHeight);
//   // console.dir(fawn_svg);
//   const currentPage = getCurrentPage();
//   if(currentPage==='fawn') {
//     fawn_camera.start();
//   } else {
//     mandrill_camera.start();
//   }
// }
// function stopMotion() {
//   // console.trace(`stop Motiontracking ${motionState}`);
//   fawn_camera.stop();
//   mandrill_camera.stop();
// }


// function onResults(handData) {
//   // console.log(fawn_svg.offsetWidth, fawn_svg.offsetHeight);
//   drawHandPositions(handData);
// }

// function drawHandPositions(handData) {
//   const currentPage = getCurrentPage();
//   const canvas = currentPage==='fawn' ? fawn_canvas : mandrill_canvas;
//   const stream = currentPage==='fawn' ? fawn_stream : mandrill_stream;
//   const box = currentPage==='fawn' ? fawn_svg_box : mandrill_svg_box;
//   const ctx = currentPage==='fawn' ? fctx : mctx;

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
//           // console.log(currHandElem);
//           handleColourReplacement(currHandElem);
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