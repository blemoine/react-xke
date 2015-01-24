var React = require('react');
var $ = require('jquery');

var Bars = React.createClass({

    getInitialState: function() {
        return {
            bars:[]
        }
    },
    componentDidMount: function() {
        $.getJSON('/bars').then((response) => {
            this.setState({bars:response.bars});
        })
    },
    render: function () {
        return <div className="left-part">
            <div>
            {this.state.bars.map((bar) =>
                <div className="hoverable">
                    <div className="bar-name-col">
                        <span>{bar.name}</span>
                    </div>
                </div>
            )}


            </div>
        </div>
    }
});

module.exports = Bars;