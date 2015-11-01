import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();


Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

console.log('Running on client only');

Meteor.startup(() => {

  ReactDOM.render(<App/>, document.getElementById('root'));
});
