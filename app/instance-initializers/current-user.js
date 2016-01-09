import Ember from 'ember';

export default {
  name: 'current-user',

  initialize(appInstance) {
    let service = Ember.ObjectProxy.create({ isServiceFactory: true });
    appInstance.register('service:current-user', service, { instantiate: false, singleton: true });
    appInstance.inject('route', 'currentUser', 'service:current-user');
    appInstance.inject('controller', 'currentUser', 'service:current-user');
    appInstance.inject('component', 'currentUser', 'service:current-user');
  }
}
