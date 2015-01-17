var React = require('react');
var addons = require('react-addons');
var PseudoForm = React.createClass({
    mixins: [addons.LinkedStateMixin],
    propTypes: {
        value: React.PropTypes.string,
        registerName: React.PropTypes.func.isRequired
    },

    getInitialState: function () {
        return {
            name: this.props.value
        }
    },

    componentWillReceiveProps: function (nextProps) {
        this.setState({name: nextProps.value});
    },

    _registerName: function (e) {
        e.preventDefault();

        var name = this.state.name;
        this.props.registerName(name);
    },

    render: function () {
        return <form onSubmit={this._registerName}>
            <input type="text" placeholder="Pseudo" valueLink={this.linkState('name')} />
            <input type="submit" value="Enregister" />
        </form>
    }
});

module.exports = PseudoForm;