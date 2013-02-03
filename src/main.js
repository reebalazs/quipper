
window.App = Ember.Application.create();

App.Quip = Ember.Object.extend({
    text: "",
    user: ""
});

App.quipsController = Ember.ArrayController.create({
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

App.quipsController.load();

App.TextField = Em.TextField.extend(Ember.TargetActionSupport, {
    insertNewline: function() {
        this.triggerAction();
    }
});

App.latestQuipsView = Em.View.extend({
    createQuip: function() {
        this.get('controller').createQuip(this.get('textField.value'));
        // clear the value
        this.set('textField.value', null); // Y U NOT WORKING?
    }
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