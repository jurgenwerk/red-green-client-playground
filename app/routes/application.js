import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  sessionAuthenticated: function() {
    this._super(...arguments); // for keeping the defaults (attempted transition, routeAfterAuth config etc..)
    this.loadUser();
  },
  loadUser: function() {
    if (this.get('session.isAuthenticated')) {
      this.store.findRecord('user', 'me').then (user => {
        this.set('session.currentUser', user);
      });
    }
  },
  beforeModel: function () {
    this.loadUser();
  },
  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
