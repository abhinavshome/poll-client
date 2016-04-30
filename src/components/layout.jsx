var React = require('react');
var PollList = require('./poll-list');

module.exports = React.createClass({
	render: function () {
		return <div>
			{this.content()}
		</div>
	},
	content: function () {
		return this.props.children || <PollList/>
	}
});