var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var PollList = require('./components/poll-list');
var Poll = require('./components/poll');
var PollForm = require('./components/poll-form');
var PollCreateForm = require('./components/poll-create-form');
var Layout = require('./components/layout');

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
    	<Route path="polls" component={PollList} />
    	<Route path="poll/:id" component={Poll} />
    	<Route path="create-poll" component={PollCreateForm} />
    	<Route path="update-poll/:pollId" component={PollForm} />
    </Route>
  </Router>
)
