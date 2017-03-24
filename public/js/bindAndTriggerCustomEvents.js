var ourObject = {};

// Mixin
_.extend(ourObject, Backbone.Events)

// Add a custom event
ourObject.on('dance', function(msg){
  console.log('We triggered ' + msg)
});

// Trigger the custom event
ourObject.trigger('dance', ' ...our event')