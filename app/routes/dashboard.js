import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  moment: Ember.inject.service(),
  queryParams: {
    period: {
      refreshModel: true
    }
  },
  model (params) {
    const period = params.period || this.get('moment').moment().format("YYYY-MM");
    return this.store.query('balance-change', { filter: { period: period } });
  }
});
