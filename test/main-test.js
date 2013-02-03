buster.testCase("quipper", {

    "is awesome": function () {
        assert(true);
    },

    "model": {

        "Quip": function() {
            var quip;
            quip = App.Quip.create({user: 'User', text: 'Text'});
            assert.match(quip, {user: 'User', text: 'Text'});
            quip = App.Quip.create({});
            assert.match(quip, {user: '', text: ''});
        }

    }


});