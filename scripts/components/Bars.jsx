var React = require('react');

var Bar = require('./Bar.jsx');

var BarStore = require('../stores/BarStore.js');
var PseudoForm = require('./PseudoForm.jsx');
var BarAction = require('../actions/BarAction.js');
var _ = require('lodash');

var Bars = React.createClass({
    getInitialState: function () {
        return {
            bars: BarStore.getAll(),

            currentlySelectedBar: null,
            currentlySelectedProperty: null
        }
    },
    componentDidMount: function () {
        BarStore.on('change', this._reloadState);
    },
    componentWillUnmount: function () {
        BarStore.removeListener('change', this._reloadState);
    },

    _reloadState: function () {
        this.setState({bars: BarStore.getAll()})
    },

    _selectProducerName: function (bar) {
        this.setState({currentlySelectedBar: bar, currentlySelectedProperty: 'producer'})
    },

    _selectConsumerName: function (bar) {
        this.setState({currentlySelectedBar: bar, currentlySelectedProperty: 'consumer'})
    },

    _registerName: function (name) {
        var bar = _.clone(this.state.currentlySelectedBar);
        bar[this.state.currentlySelectedProperty] = name;
        BarAction.updateBar(bar);
        this.setState({
            currentlySelectedBar: null,
            currentlySelectedProperty: null
        });
    },

    render: function () {
        var currentlySelectedName = this.state.currentlySelectedBar ? this.state.currentlySelectedBar[this.state.currentlySelectedProperty] : null;

        return <div>
            <div className="left-part">
                <div>
                    {this.state.bars.map(bar => <Bar bar={bar} key={bar.id} changeProducer={this._selectProducerName} changeConsumer={this._selectConsumerName}/>)}
                </div>
            </div>
            <div className="right-part">
                <PseudoForm value={currentlySelectedName} registerName={this._registerName}/>
            </div>
        </div>
    }
});


module.exports = Bars;