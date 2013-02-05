window.App = Ember.Application.create();

App.Quip = DS.Model.extend({
  text: DS.attr('string'),
  user: DS.attr('string')
});

App.Store = DS.Store.extend({
    revision: 11,
    adapter: 'App.QuipsAdapter'
});

// http://stackoverflow.com/questions/12386913/ember-data-fixture-adapter
App.Quip.FIXTURES = [
    { id: 1, user: 'ree', text: 'Which is the best JS MVC?' },
    { id: 2, user: 'baaz', text: '@ree Definitely Ember.js!' }
];

App.QuipsAdapter = DS.FixtureAdapter.extend({});

App.ApplicationView = Ember.View.extend({
    templateName: 'application'
});

App.IndexRoute = Ember.Route.extend({
    model: function() {
        return App.Quip.find();
    }
});

App.IndexController = Ember.ArrayController.extend({
  createQuip: function() {
    App.Quip.createRecord({
      text: this.get('newQuip'),
      user: 'ree'
    });
    this.set('newQuip', '');
    this.get('store').commit();
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
