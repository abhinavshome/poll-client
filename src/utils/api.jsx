var Fetch = require('whatwg-fetch');
var rootUrl = 'http://localhost:1337/';
var apiKey = '430d6820d865788';

module.exports = {
  fetchPolls: function() {
    return fetch(rootUrl + 'polls')
      .then(function(response){
        return response.json()
      });
  },
  fetchPoll: function(pollId) {
    return fetch(rootUrl + 'polls/' + pollId)
	    .then(function(response){
	      return response.json()
	    });
  },
  createPoll: function (poll) {
  	console.log(poll);
  	return fetch(rootUrl + 'polls', {method: 'POST', body: JSON.stringify(poll)})
  		.then(function (response) {
  			return response.json()
  		});
  },
  updatePoll: function (poll) {
  	console.log(poll);
  	return fetch(rootUrl + 'polls/' + poll.id, {method: 'PUT', body: JSON.stringify(poll)})
  		.then(function (response) {
  			return response.json()
  		});
  }
};
