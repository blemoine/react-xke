var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');
var Dispatcher = require('../dispatcher/Dispatcher');

var $ = require('jquery');
var bars = [];


var BarStore = _.assign({
    getAll: function () {
        return bars;
    }
}, EventEmitter.prototype);


$.getJSON('/bars').then(function (response) {
    bars = response.bars;
    BarStore.emit('change');
});

Dispatcher.register(function (action) {
    if (action.actionType == 'updateBar') {
        bars = bars.map(bar => {
            if (bar.id == action.bar.id) {
                return action.bar;
            } else {
                return bar;
            }
        });
        BarStore.emit('change');
    }

});

module.exports = BarStore;