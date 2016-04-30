var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
  listenables: [Actions],
  fetchPolls: function() {
    return Api
              .fetchPolls()
              .then(function(data){
                  this.polls = data;
                  this.trigger('POLL_LIST_RELOAD', this.polls);
              }.bind(this));
  },
  fetchPoll: function (pollId) {
    return Api
              .fetchPoll(pollId)
              .then(function(data){
                  this.poll = data;
                  this.trigger('POLL_FETCHED', this.poll);
              }.bind(this));
  },
  createPoll: function (poll) {
    return Api
              .createPoll(poll)
              .then(function (data) {
                  this.trigger('POLL_CREATED', data);
              }.bind(this));
  },
  vote: function (qnId, optionId) {
    console.log('voted on ', qnId, optionId);
  },
  addOptionToPoll: function (poll) {
    return Api
              .updatePoll(poll)
              .then(function (data) {
                  this.trigger('POLL_UPDATED', data);
              }.bind(this));
  }
});
