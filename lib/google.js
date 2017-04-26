'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Google = _react2.default.createClass({
  displayName: 'Google',

  propTypes: {
    style: _react2.default.PropTypes.object,
    client: _react2.default.PropTypes.string.isRequired,
    slot: _react2.default.PropTypes.string.isRequired,
    format: _react2.default.PropTypes.string
  },

  componentDidMount: function componentDidMount() {
    console.log('adsense mount');
    if (window) (window.adsbygoogle = window.adsbygoogle || []).push({});
  },

  componentWillUnmount: function componentWillUnmount() {
    console.log('adsense unmount mount');
    // IMPORTANT! Allow us to push new slot on other pages
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.length = 0;
  },

  getDefaultProps: function getDefaultProps() {
    return {
      style: { display: 'block' },
      format: 'auto'
    };
  },

  render: function render() {
    return _react2.default.createElement('ins', { className: 'adsbygoogle',
      style: this.props.style,
      'data-ad-client': this.props.client,
      'data-ad-slot': this.props.slot,
      'data-ad-format': this.props.format });
  }
});

module.exports = Google;