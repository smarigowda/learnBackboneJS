// Define an object with two counters
var TodoCounter = { counterA: 0, counterB: 0 };
// Mix in Backbone Events
_.extend(TodoCounter, Backbone.Events);

// Increment counterA, triggering an event
var incrA = function(){ 
  debugger
  TodoCounter.counterA += 1; 
  // This triggering will not produce any effect on the counters
  TodoCounter.trigger('event'); 
};

// Increment counterB
var incrB = function(){ 
  debugger
  TodoCounter.counterB += 1; 
};

// Use once rather than having to explicitly unbind
// our event listener
TodoCounter.once('event', incrA);
TodoCounter.once('event', incrB);

debugger
// Trigger the event for the first time
TodoCounter.trigger('event');

// Check out output

console.log(TodoCounter.counterA === 1); // true
console.log(TodoCounter.counterB === 1); // true