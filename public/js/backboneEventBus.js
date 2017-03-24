Backbone.on('event', function() {
	console.log('Backbone event');
});
Backbone.trigger('event'); // logs: Handled Backbone event