
window.App = Ember.Application.create();

App.Quip = Ember.Object.extend({
    text: "",
    user: ""
});

App.QuipsController = Ember.ArrayController.create({
    content: [],
    add: function (quip) {
        var length = this.get('length');
        this.insertAt(length, quip);
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
    createQuip: function () {
        var text = this.get('newQuip');
        console.log('lotetu', text);
    }
});

App.QuipsController.load();

App.Router.map(function () {
    console.log("routes are being defined");
    this.resource('quips', { path: '/' });
    console.log("routes have been defined");
});



