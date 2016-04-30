var React = require('react');
var ReactRouter = require('react-router');
var Reflux = require('reflux');
var Actions = require('../actions');
var PollStore = require('../stores/poll-store');
var StoreListener = require('../utils/store-listener');

module.exports = React.createClass({
	mixins: [
    	Reflux.listenTo(PollStore, 'onStoreUpdate'),
    	StoreListener,
    	ReactRouter.Navigation
  	],
	render: function () {
		return <form>
				  <div className="form-group">
				    <label>Enter Question text</label>
				    <input type="text" ref="qn" className="form-control" placeholder="Enter question text"/>
				  </div>
				  <button className="btn btn-success" onClick={this.createPoll}>Next</button>
				</form>
	},
	createPoll: function (event) {
		event.preventDefault();
		Actions.createPoll({
		    qn: React.findDOMNode(this.refs.qn).value
		});
	},
	pollCreatedListener: function (data) {
		this.props.history.pushState(null, '/update-poll/' + data.id);
	}
});