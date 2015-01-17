var React = require('react');

var Bar = require('./Bar.jsx');

var BarStore = require('../stores/BarStore.js');
var PseudoForm = require('./PseudoForm.jsx');

var Bars = React.createClass({
    getInitialState: function () {
        return {
            bars: BarStore.getAll()
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

    render: function () {
        return <div>
            <div className="left-part">
                <div>
            {this.state.bars.map(bar => <Bar bar={bar} key={bar.id} />)}
                </div>
            </div>
            <div className="right-part">
                <PseudoForm />
            </div>
        </div>
    }
});


module.exports = Bars;