var React = require('react');

var Bar = require('./Bar.jsx');
var BarStore = require('../stores/BarStore');
var PseudoForm = require('./PseudoForm.jsx');

var Bars = React.createClass({

    getInitialState: function () {
        return {
            bars: [],
            currentSelectedName:null
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
                    <Bar key={bar.name}
                        bar={bar}
                        selectProducer={() => this.setState({currentSelectedName:bar.producer})}
                        selectConsumer={() => this.setState({currentSelectedName:bar.consumer})}
                        />
            )}
                </div>
            </div>
            <div className="right-part">
                <PseudoForm name={this.state.currentSelectedName} />
            </div>
        </div>
    }
});

module.exports = Bars;