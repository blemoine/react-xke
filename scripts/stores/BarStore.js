var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');
var $ = require('jquery');

var bars = [];
var BarStore = _.assign({


    getAll: function() {
        return bars;
    }

}, EventEmitter.prototype);


$.getJSON('/bars').then((response) => {
    bars = response.bars;
    BarStore.emit('change');
});

module.exports = BarStore;