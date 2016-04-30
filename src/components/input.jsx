var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {value: this.props.value || 'Hello!'};
  },
  handleChange: function(event) {
  	console.log(event.target.value);
    this.setState({value: event.target.value});
    this.props.formObject[this.props.name] = event.target.value;
  },
  render: function() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
});