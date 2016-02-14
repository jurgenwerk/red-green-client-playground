import Ember from 'ember';

export default {
  name: "session-injection",
  after: 'ember-simple-auth',

  initialize(appInstance) {
    appInstance.inject('route', 'session', 'service:session');
    appInstance.inject('controller', 'session', 'service:session');
  }
}
