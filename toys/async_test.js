// The function being invoked by setTimeout will have it's own call
// stack, therefore  setTimeout(function() {}, n ) runs when the
// current stack is cleared and after n milliseconds have passed, if no
//  time to delay is given, setTimeout simply runs as soon as the stack
// unwinds. It's a useful trick for executing asynchronous code in a
// single thread.  The coder's algorithm is non-blocking and
// asynchronous, but the its execution is blocked into an efficient,
// linear sequence.

setTimeout(() => {
  console.log("Last despite being up here");
}, 0);
console.log("Actually first");
console.log("Actually second");
