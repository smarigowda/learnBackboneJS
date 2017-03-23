// Define a Todo Model
var Todo = Backbone.Model.extend({
  // Default todo attribute values
  defaults: {
    title: '',
    completed: false
  }
});

// Instantiate the Todo Model with a title, with the completed attribute
// defaulting to false
var myTodo = new Todo({
  title: 'Check attributes property of the logged models in the console.'
});

var TodoView = Backbone.View.extend({

  tagName:  'li',

  // Cache the template function for a single item.
  todoTpl: _.template( $('#item-template').html() ),

  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit':   'close'
  },

  initialize: function (options) {
    // In Backbone 1.1.0, if you want to access passed options in
    // your view, you will need to save them as follows:
    this.options = options || {};
    this.$el = $('#todo');
    // this.$el = $('#todo');
  },

  // Re-render the title of the todo item.
  render: function() {
    console.log("test......")
    debugger
    this.$el.html( this.todoTpl( this.model.attributes ) );
    this.input = this.$('.edit');
    return this;
  },

  edit: function() {
    // executed when todo label is double clicked
  },

  close: function() {
    // executed when todo loses focus
  },

  updateOnEnter: function( e ) {
    // executed on each keypress when in todo edit mode,
    // but we'll wait for enter to get in action
  }
});

debugger

var todoView = new TodoView({model: myTodo});
todoView.render()
debugger
// var todoView = new TodoView();

// log reference to a DOM element that corresponds to the view instance
console.log(todoView.el); // logs <li></li>