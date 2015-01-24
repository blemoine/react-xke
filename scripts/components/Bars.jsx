var React = require('react');

var Bar = require('./Bar.jsx');
var BarStore = require('../stores/BarStore');
var PseudoForm = require('./PseudoForm.jsx');
var BarAction = require('../actions/BarAction');
var _ = require('lodash');

var Bars = React.createClass({

    getInitialState: function () {
        return {
            bars: [],
            currentSelectedBar: null,
            currentSelectedAttribute: null
        }
    },
    componentDidMount: function () {
        BarStore.on('change', this._barsChanged);
    },
    componentWillUnmount: function () {
        BarStore.removeListener('change', this._barsChanged);
    },
    _barsChanged: function (bar) {
        this.setState({bars: BarStore.getAll()});
    },
    _changeNameOfSelectedBar: function (name) {
        var newBar = _.clone(this.state.currentSelectedBar);
        newBar[this.state.currentSelectedAttribute] = name;
        BarAction.updateBar(newBar);
        this.setState({
            currentSelectedBar: null,
            currentSelectedAttribute: null
        });
    },
    render: function () {

        var currentSelectedName = this.state.currentSelectedBar ? this.state.currentSelectedBar[this.state.currentSelectedAttribute] : '';
        return <div>
            <div className="left-part">
                <div>
            {this.state.bars.map(bar =>
                    <Bar key={bar.name}
                        bar={bar}
                        selectProducer={() => this.setState({
                            currentSelectedBar: bar,
                            currentSelectedAttribute: 'producer'
                        })}
                        selectConsumer={() => this.setState({
                            currentSelectedBar: bar,
                            currentSelectedAttribute: 'consumer'
                        })}
                    />
            )}
                </div>
            </div>
            <div className="right-part">
                <PseudoForm name={currentSelectedName} changeName={this._changeNameOfSelectedBar} />
            </div>
        </div>
    }
});

module.exports = Bars;