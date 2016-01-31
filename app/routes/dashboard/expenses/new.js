import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import moment from 'moment';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model (params, transition) {
    let entryDate = null;
    if (transition.queryParams.period) {
      entryDate = moment(transition.queryParams.period + "-01");
    } else {
      entryDate = moment();
    }
    return this.store.createRecord('balance-change', { changeType: 'expense', entryDate: entryDate.format('YYYY-MM-DD') });
  }
});
