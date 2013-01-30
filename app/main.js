
window.App = Ember.Application.create();

App.Quip = Ember.Object.extend({
    text: "",
    user: ""
});

App.quipsController = Ember.ArrayController.create({
    content: [],
    add: function (quip) {
        var length = this.get('length');
        this.insertAt(length, quip);
    },
    load: function () {
        var content = [
            App.Quip.create({
                text: "redefine reinvent envisioneer podcasts architect bricks-and-clicks content",
                user: "ree"
            }),
            App.Quip.create({
                text: "functionalities utilize front-end synergize disintermediate integrate AJAX-enabled ROI seamles",
                user: "baaz"
            })
        ];
        this.set('content', content);
    }
});

App.quipsController.load();

App.Router.map(function () {
});


