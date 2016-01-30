import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import moment from 'moment';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model (params, transition) {
    let entryTime = null;
    if (transition.queryParams.period) {
      entryTime = moment(transition.queryParams.period);
    } else {
      entryTime = moment();
    }
    debugger
    return this.store.createRecord('balance-change', { changeType: 'income', entryTime: entryTime.toDate() });
  },
  actions: {
    save: function() {
      this.controller.get('model').save().then(() => {
        this.send('refreshRoute');
        this.transitionTo('dashboard.incomes');
      });
    }
  }
});
