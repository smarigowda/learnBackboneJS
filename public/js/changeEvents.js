// debugger

var Person = new Backbone.Model();
Person.on("change:name", function() { console.log('Name changed'); });
Person.set({ name: 'Andrew' });
// log entry: Name changed

Person.set({ name: 'Jeremy' }, { silent: true });
// no log entry

console.log(Person.hasChanged("name"));
// true: change was recorded
console.log(Person.hasChanged(null));
// true: something (anything) has changed