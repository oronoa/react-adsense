import React from 'react';

const Google = React.createClass({
  propTypes: {
    style: React.PropTypes.object,
    client: React.PropTypes.string.isRequired,
    slot: React.PropTypes.string.isRequired,
    format: React.PropTypes.string
  },

  componentDidMount: function() {
    console.log('adsense mount');
    if(window) (window.adsbygoogle = window.adsbygoogle || []).push({});
  },

  componentWillUnmount: function() {
    console.log('adsense unmount mount');
    // IMPORTANT! Allow us to push new slot on other pages
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.length = 0;
  },

  getDefaultProps: function() {
    return {
      style: {display: 'block'}, 
      format: 'auto'
    };
  },

  render: function() {
    return (
      <ins className="adsbygoogle" 
        style={this.props.style} 
        data-ad-client={this.props.client} 
        data-ad-slot={this.props.slot} 
        data-ad-format={this.props.format}></ins>
    );
  }
});

module.exports = Google;