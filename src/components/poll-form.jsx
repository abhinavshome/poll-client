var React = require('react');
var Input = require('./input');
var Actions = require('../actions');
var Reflux = require('reflux');
var StoreListener = require('../utils/store-listener');
var PollStore = require('../stores/poll-store');

module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(PollStore, 'onStoreUpdate'),
        StoreListener
    ],
    getInitialState: function() {
        return {
            formObject: {},
            poll: null
        }
    },
    componentWillMount: function() {
        Actions.fetchPoll(this.props.params.pollId);
    },
    render: function() {
        return this.state.poll && this.renderPoll();
    },
    renderPoll: function() {
        return <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">Q. {this.state.poll.qn}</h3>
                  </div>
                  <div className="panel-body">
                    {(this.state.poll.options || []).map(function (option, index) {
                        return <div>
                            <b>Option # {index}</b> <br/> 
                            {option.label}
                            <br/><br/>
                        </div>
                    })}
                    <div className="form-group">
                        <label>Add an option</label>
                        <input type="text" ref="newOption" className="form-control" placeholder="Password"/>
                    </div>
                    <button className="btn btn-default" onClick={this.addOption}>Add</button>
                  </div>
                  <div className="panel-footer">
                    <button className="btn btn-success">Publish</button>
                  </div>
                </div>
    },
    addOption: function() {
        var updatedPoll = this.state.poll,
            newOption = {
                id: this.state.poll.options.length + 1,
                label: React.findDOMNode(this.refs.newOption).value
            }
        updatedPoll.options.push(newOption);
        Actions.addOptionToPoll(updatedPoll);
    },
    pollFetchedListener: function(data) {
        data.options = data.options || [];
        this.setState({ poll: data });
    },
    pollUpdatedListener: function(data) {
        this.setState({ poll: data });
    }

});
