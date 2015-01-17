var appDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
    updateBar: function (bar) {
        appDispatcher.dispatch({
            actionType: 'updateBar',
            bar: bar
        });
    }
};