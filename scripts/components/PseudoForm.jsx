var React = require('react');

var PseudoForm = React.createClass({
    render: function () {
        return <form>
            <input type="text" placeholder="Pseudo" />
            <input type="submit" value="Enregistrer" />
        </form>
    }
});

module.exports = PseudoForm;