var React = require('react');

var Bar = require('./Bar.jsx');
var BarStore = require('../stores/BarStore');
var PseudoForm = require('./PseudoForm.jsx');

var Bars = React.createClass({

    getInitialState: function () {
        return {
            bars: []
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
    render: function () {
        return <div>
            <div className="left-part">
                <div>
            {this.state.bars.map(bar =>
                    <Bar key={bar.name} bar={bar} />
            )}
                </div>
            </div>
            <div className="right-part">
                <PseudoForm />
            </div>
        </div>
    }
});

module.exports = Bars;