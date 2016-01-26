import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model () {
    return this.store.createRecord('balance-change', { changeType: 'expense' });
  },
  actions: {
    save: function() {
      this.controller.get('model').save().then(() => {
        this.send('refreshRoute');
        this.transitionTo('dashboard.expenses');
      })
    }
  }
});
