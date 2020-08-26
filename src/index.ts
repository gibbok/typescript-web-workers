
console.log('Hello world!')

// The new worker is created from a link to an external js file
const myWorker = new Worker('./dist/worker.js');

// Function to fire when a message is sent from the worker
myWorker.onmessage = function (e) {
  console.log(e.data); // MY MESSAGE!
}

// Send a message to the worker
myWorker.postMessage('My message!');