var React = require('react');

var Bar = React.createClass({

    propTypes: {
        bar: React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            producer: React.PropTypes.string,
            consumer: React.PropTypes.string
        }).isRequired
    },

    render: function () {

        var producerClass = this.props.bar.producer ? 'occupied' : 'free';
        var consumerClass = this.props.bar.consumer ? 'occupied' : 'free';

        return <div className="hoverable">
            <div className="bar-name-col">
                <span>{this.props.bar.name}</span>
            </div>
            <div className="producer-col">
                <span className={producerClass}>{this.props.bar.producer}</span>
            </div>
            <div className="consumer-col">
                <span className={consumerClass}>{this.props.bar.consumer}</span>
            </div>
        </div>
    }
});

module.exports = Bar;