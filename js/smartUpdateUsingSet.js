// Define a model of type 'Beatle' with a 'job' attribute
var Beatle = Backbone.Model.extend({
  defaults: {
    job: 'musician'
  }
});

// Create models for each member of the Beatles
var john = new Beatle({ firstName: 'John', lastName: 'Lennon'});
var paul = new Beatle({ firstName: 'Paul', lastName: 'McCartney'});
var george = new Beatle({ firstName: 'George', lastName: 'Harrison'});
var ringo = new Beatle({ firstName: 'Ringo', lastName: 'Starr'});

// Create a collection using our models
var theBeatles = new Backbone.Collection([john, paul, george, ringo]);

// Create a separate model for Pete Best
var pete = new Beatle({ firstName: 'Pete', lastName: 'Best'});

debugger
// Update the collection
theBeatles.set([john, paul, george, pete]);
debugger
// Fires a `remove` event for 'Ringo', and an `add` event for 'Pete'.
// Updates any of John, Paul and Georges's attributes that may have
// changed over the years.