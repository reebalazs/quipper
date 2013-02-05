window.App = Ember.Application.create();

App.Quip = DS.Model.extend({
  text: DS.attr('string'),
  user: DS.attr('string')
});

App.Store = DS.Store.extend({
    revision: 11
});

App.ApplicationView = Ember.View.extend({
    templateName: 'application'
});

App.ApplicationController = Ember.Controller.extend({
});

App.Router.map(function() {
    this.route('quips', { path: '/quips' });
});

App.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.load();
  }
});

App.QuipsRoute = Ember.Route.extend({
    model: function() {
        return App.Quip.find();
    }
});

App.IndexController = Ember.ArrayController.extend({
  content: [],
  addQuip: function (quip) {
    this.insertAt(0, quip);
  },
  load: function () {
    var content = [
      App.Quip.createRecord({
        text: "Hi! Redefine, or reinvent envisioneer podcasts, or architect bricks-and-clicks content?",
        user: "ree"
      }),
      App.Quip.createRecord({
        text: "Sure. Functionalities utilize front-end synergize, with disintermediate, and integrate AJAX-enabled ROI seamlessly.",
        user: "baaz"
      })
    ];
    this.set('content', content);
  },
  createQuip: function() {
    var user = 'ree';
      console.log('In createQuip');
    App.Quip.createRecord({
      text: this.get('newQuip'),
      user: user
    });
    //FIXME: this does not clear the input field
    this.set('newQuip', '');
    this.get('store').commit();
      console.log('createQuip ends here');
  }
});

App.IndexView = Ember.View.extend({
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
