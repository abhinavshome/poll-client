var React = require('react');

module.exports = React.createClass({
	render: function () {
		return <tr>
				<td>
					<input 
						type="radio" 
						name={"option-" + this.props.qnId} 
						value={this.props.optionId}
						id={this.props.qnId + "-" + this.props.optionId}
						onChange={this.props.whenClicked}
						/>
				</td>
				<td>
					<span>{this.props.label}</span>
				</td>
				<td>
					<span style={{width: this.props.votePercent*2 + 'px' }} className="bar"></span>
					&nbsp; {this.props.votePercent}%
				</td>
			</tr>
	}
});