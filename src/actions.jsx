var Reflux = require('reflux');

module.exports = Reflux.createActions([
  'getTopics',
  'getImages',
  'getImage',
  'fetchPolls',
  'createPoll',
  'updatePoll',
  'vote',
  'fetchPoll',
  'addOptionToPoll'
]);
