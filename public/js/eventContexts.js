var View = Backbone.View.extend({

    el: '#todo',

    // bind to DOM event using events property
    events: {
        'click [type="checkbox"]': 'clicked',
    },

    initialize: function () {
        // this is just binding the click evetn but not the clicking action 
        // bind to DOM event using jQuery
        this.$el.click(this.jqueryClicked)

        // bind to API event
        debugger
        this.on('apiEvent', this.callback)
    },

    // 'this' is view
    clicked: function(event) {
        debugger
        console.log("events handler for " + this.el.outerHTML);
        this.trigger('apiEvent', event.type)
    },

    // 'this' is handling DOM element
    jqueryClicked: function(event) {
        debugger
        console.log("jQuery handler for " + this.outerHTML)
    },

    callback: function(eventType) {
        debugger
        console.log("event type was " + eventType)
    }

})

var view = new View()