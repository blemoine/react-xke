var React = require('react');

var PseudoForm = React.createClass({
    propTypes: {
        name: React.PropTypes.string
    },
    render: function () {
        return <form>
            <input type="text" placeholder="Pseudo" value={this.props.name}/>
            <input type="submit" value="Enregistrer" />
        </form>
    }
});

module.exports = PseudoForm;