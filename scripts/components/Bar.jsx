var React = require('react');

var Bar = React.createClass({
    propTypes: {
        bar: React.PropTypes.shape({
            name: React.PropTypes.string
        }).isRequired
    },
    render: function () {



        return <div className="hoverable">
            <div className="bar-name-col">
                <span>{this.props.bar.name}</span>
            </div>
            <div className="producer-col">
                <span className={this.props.bar.producer?"occupied":'free'}>{this.props.bar.producer}</span>
            </div>
            <div className="consumer-col">
                <span className={this.props.bar.consumer?"occupied":'free'}>{this.props.bar.consumer}</span>
            </div>
        </div>
    }

});

module.exports = Bar;