var React = require('react');

var Header = React.createClass({
    render: function () {
        return <header>
            <h1>GHM</h1>
            <h2></h2>
        </header>
    }
});

React.render(<Header />, document.getElementById('react'));