import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

  sessionAuthenticated: function() {
    this._super(...arguments); //for keeping the defaults (attempted transition, routeAfterAuth config etc..)
    this.loadUser();
  },

  loadUser: function() {
    this.store.findRecord('user', 'me')
  },

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
