var React = require('react');
var $ = require('jquery');

var _ = require('lodash');

var Bar = require('./Bar.jsx');

var Bars = React.createClass({

  getInitialState: function () {
    return {
      bars: []
    }
  },
  componentDidMount: function () {
    var self = this;
    $.getJSON('/bars').then(function (response) {
      self.setState({bars: response.bars});
    });
  },
  render: function () {
    return <div>
        <div className="left-part">
          <div>
              {this.state.bars.map(bar =>
                  <Bar key={bar.name}
                    bar={bar}
                  />
              )}
          </div>
        </div>
      </div>
  }
});

module.exports = Bars;