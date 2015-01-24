
var Dispatcher = require('../dispatcher/Dispatcher.js');

module.exports = {
    updateBar: function(bar) {
        Dispatcher.dispatch({
            actionType: 'updateBar',
            bar:bar
        });
    }
};

