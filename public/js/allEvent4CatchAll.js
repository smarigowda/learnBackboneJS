var ourObject = {};

// Mixin
_.extend(ourObject, Backbone.Events);

ourObject.on("all", function(eventName, otherArgs){
  console.log("The name of the event passed was " + eventName);
  console.log(`otherArgs = ${otherArgs}`)
});

debugger
// This time each event will be caught with a catch 'all' event listener
ourObject.trigger("dance:tap", "tap dancing. Yeah!");
ourObject.trigger("dance:break", "break dancing. Yeah!");
ourObject.trigger("dance", "break dancing. Yeah!");