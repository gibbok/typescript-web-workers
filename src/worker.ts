
// Provide a definition for Worker global scope
(self as DedicatedWorkerGlobalScope).onmessage = function (e: MessageEvent) {
  setInterval(() => {
    self.postMessage(e.data.toUpperCase());
  }, 500)
}