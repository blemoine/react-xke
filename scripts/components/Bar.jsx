var React = require('react');

var Bar = React.createClass({

    propTypes: {
        bar: React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            producer: React.PropTypes.string,
            consumer: React.PropTypes.string
        }).isRequired,
        changeProducer: React.PropTypes.func.isRequired,
        changeConsumer: React.PropTypes.func.isRequired
    },
    _changeProducer: function () {
        this.props.changeProducer(this.props.bar.producer);
    },
    _changeConsumer: function () {
        this.props.changeConsumer(this.props.bar.consumer);
    },

    render: function () {

        var producerClass = this.props.bar.producer ? 'occupied' : 'free';
        var consumerClass = this.props.bar.consumer ? 'occupied' : 'free';

        return <div className="hoverable">
            <div className="bar-name-col">
                <span>{this.props.bar.name}</span>
            </div>
            <div className="producer-col" onClick={this._changeProducer}>
                <span className={producerClass}>{this.props.bar.producer}</span>
            </div>
            <div className="consumer-col" onClick={this._changeConsumer}>
                <span className={consumerClass}>{this.props.bar.consumer}</span>
            </div>
        </div>
    }
});

module.exports = Bar;