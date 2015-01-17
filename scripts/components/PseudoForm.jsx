var React= require('react');

var PseudoForm = React.createClass({
    propTypes: {
        value: React.PropTypes.string
    },

    render :function() {
        return <form>
            <input type="text" placeholder="Pseudo" value={this.props.value} />
            <input type="submit" value="Enregister" />
        </form>
    }
});

module.exports = PseudoForm;