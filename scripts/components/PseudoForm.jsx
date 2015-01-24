var React = require('react');
var addons = require('react-addons');

var PseudoForm = React.createClass({
    mixins: [addons.LinkedStateMixin],
    propTypes: {
        name: React.PropTypes.string,
        changeName: React.PropTypes.func
    },
    getInitialState: function () {
        return {name: ''}
    },
    _changeName: function (e) {
        e.preventDefault();
        this.props.changeName(this.state.name);
    },
    componentWillReceiveProps: function(newProps) {
      this.setState({name:newProps.name});
    },
    render: function () {
        return <form onSubmit={this._changeName}>
            <input type="text" placeholder="Pseudo" valueLink={this.linkState('name')} />
            <input type="submit" value="Enregistrer" />
        </form>
    }
});

module.exports = PseudoForm;