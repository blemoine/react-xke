var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');
var $ = require('jquery');
var AppDispatcher = require('../dispatcher/AppDispatcher.js');

var bars = [];
var BarStore = _.assign({

    getAll: function () {
        return bars;
    }

}, EventEmitter.prototype);

AppDispatcher.register(function (action) {
    if (action.actionType == 'updateBar') {
        var newBar = action.bar;
        var newBars = bars.filter((bar) => bar.id != newBar.id);
        newBars.push(newBar);
        newBars.sort((a, b)=>a.id - b.id);
        bars = newBars;
        BarStore.emit('change');
    }
});


$.getJSON('/bars').then((response) => {
    bars = response.bars.sort((a, b)=>a.id - b.id);
    BarStore.emit('change');
});

module.exports = BarStore;