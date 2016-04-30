var React = require('react');
var Option = require('./option');
var Api = require('../utils/api');
var Actions = require('../actions');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			poll: this.props.poll
		}
	},
	componentWillMount: function () {

	},
	render: function () {
		if(this.props.poll) {
			return <div className="poll col-sm-5 col-md-5 col-lg-4">
				<div className="qn">{this.state.poll.qn}</div>
				<div className="options">
					<table className="table table-bordered">
					{this.renderOptions()}
					</table>
				</div>
				<button onClick={this.handleVoteBtnClick}>Vote</button>	
			</div>
		}
	},
	renderOptions: function () {
		return this.state.poll.options && this.state.poll.options.map(function (option) {
			return <Option 
				qnId={this.state.poll.qnId} 
				label={option.label} 
				optionId={option.id} 
				votePercent={option.votePercent}
				whenClicked={this.handleOptionChange}
			/>		
		}.bind(this));
	},
	handleOptionChange: function (event) {
		this.setState({selectedOption: event.target.value});
	},
	handleVoteBtnClick: function () {
		Actions.vote(this.state.poll.id, this.state.selectedOption);
	}
});