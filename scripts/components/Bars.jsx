var React = require('react');
var $ = require('jquery');

var _ = require('lodash');

var Bars = React.createClass({

  getInitialState: function () {
    return {
      bars: [],
      currentSelectedBar: null,
      currentSelectedAttribute: null
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
                  <div className="hoverable">
                    <div className="bar-name-col">
                      <span>{bar.name}</span>
                    </div>
                  </div>
              )}
          </div>
        </div>
      </div>
  }
});

module.exports = Bars;