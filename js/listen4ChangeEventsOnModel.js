var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

var myTodo = new Todo();

myTodo.set({ title: 'Buy some cookies', completed: true });

myTodo.on({
   'change:title' : titleChanged,
   'change:completed' : stateChanged
});

function titleChanged(){
  console.log('The title was changed!');
}

function stateChanged(){
  console.log('The state was changed!');
}

debugger
myTodo.set({title: 'Get the groceries'});
// The title was changed! 