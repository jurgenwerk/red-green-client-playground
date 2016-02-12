import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  actions: {
    save: function() {
      this.get('session.currentUser').setProperties(this.controller.get('updatedUserProperties'));
      this.get('session.currentUser').save().then(() => {
        this.transitionTo('dashboard.overview');
      });
    }
  }
});
