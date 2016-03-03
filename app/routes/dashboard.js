import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import moment from 'moment';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  queryParams: {
    period: {
      refreshModel: true
    }
  },
  model (params) {
    const period = params.period || moment.moment().format("YYYY-MM");
    return this.store.query('balance-change', { filter: { period: period } });
  },
  beforeModel (transition) {
    if (transition.targetName === "dashboard.index"){
      transition.abort()
      this.transitionTo('dashboard.overview');
    }
  },
  actions: {
    refreshRoute: function() {
      this.refresh();
    }
  }
});
