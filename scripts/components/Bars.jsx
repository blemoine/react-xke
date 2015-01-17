var React = require('react');
var $ = require('jquery');
var Bar = require('./Bar.jsx');

var Bars = React.createClass({
    getInitialState: function () {
        return {
            bars: []
        }
    },
    componentDidMount: function () {
        $.getJSON('/bars').then((response) =>this.setState({bars: response.bars}));
    },
    render: function () {
        return <div className="left-part">
            <div>
            {this.state.bars.map(bar => <Bar bar={bar} key={bar.id} />)}
            </div>
        </div>
    }
});


module.exports = Bars;