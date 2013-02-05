
window.App = Ember.Application.create();

App.ApplicationView = Ember.View.extend({
    templateName: 'application'
});
App.ApplicationController = Ember.Controller.extend({
});

App.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.load();
  }
});

App.IndexController = Ember.ArrayController.extend({
  content: [],
  addQuip: function (quip) {
    this.insertAt(0, quip);
  },
  load: function () {
    var content = [
      App.Quip.create({
        text: "Hi! Redefine, or reinvent envisioneer podcasts, or architect bricks-and-clicks content?",
        user: "ree"
      }),
      App.Quip.create({
        text: "Sure. Functionalities utilize front-end synergize, with disintermediate, and integrate AJAX-enabled ROI seamlessly.",
        user: "baaz"
      })
    ];
    this.set('content', content);
  },
  createQuip: function (text) {
    var user = 'ree';
    this.addQuip(App.Quip.create({
      text: text,
      user: user
    }));
  }
});

App.IndexView = Ember.View.extend({
  createQuip: function() {
    this.controller.createQuip(this.get('newQuip.value'));
    // clear the value
    this.set('newQuip.value', null); // Y U NOT WORKING?
  }
});

App.Quip = Ember.Object.extend({
  text: "",
  user: ""
});

App.quipView = Em.View.extend({
    didInsertElement: function() {
        var self = this;
        this.$()
            .css('height', 0)
            .animate({
                height: 19
            }, 250);
    }
});