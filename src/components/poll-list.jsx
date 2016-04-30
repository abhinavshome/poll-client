var React = require('react');
var Poll = require('./poll');
var PollStore = require('../stores/poll-store');
var Actions = require('../actions');
var Reflux = require('reflux');

module.exports = React.createClass({
	mixins: [
    	Reflux.listenTo(PollStore, 'onChange')
  	],
	getInitialState: function () {
		return {
			polls: []
		}	
	},
	componentWillMount: function () {
		Actions.fetchPolls();
	},
	render: function () {
		if(!this.state.polls.length) {
			return <div>
				No polls to show
			</div>
		}

		var pollList = this.state.polls.map(function (poll) {
			return <Poll poll={poll} />
		});

		return <div className="row">
			{pollList}
		</div>
	},
	onChange: function (event, data) {
		this.setState({polls: data});
	}
});