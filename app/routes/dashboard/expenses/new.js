import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import moment from 'moment';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model (params, transition) {
    let entryTime = null;
    if (transition.queryParams.period) {
      entryTime = moment(transition.queryParams.period).toDate();
    } else {
      entryTime = moment().toDate();
    }
    debugger
    return this.store.createRecord('balance-change', { changeType: 'expense', entryTime: entryTime });
  },
  actions: {
    save: function() {
      this.controller.get('model').save().then(() => {
        this.send('refreshRoute');
        this.transitionTo('dashboard.expenses');
      });
    }
  }
});
