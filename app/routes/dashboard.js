import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  moment: Ember.inject.service(),
  queryParams: {
    period: {
      refreshModel: true
    }
  },
  getCurrentPeriod () {
    return this.get('moment').moment(this.controller.get('period'));
  },
  model (params) {
    const period = params.period || this.get('moment').moment().format("YYYY-MM");
    return this.store.query('balance-change', { filter: { period: period } });
  },
  afterModel (model, transition) {
    if (transition.targetName === "dashboard.index"){
      this.transitionTo('dashboard.overview');
    }
  },
  actions: {
    refreshRoute: function() {
      this.refresh();
    },
    goPeriodBack: function() {
      const previousPeriod = this.getCurrentPeriod().subtract(1, "month").format("YYYY-MM");
      this.controller.set('period', previousPeriod);
    },
    goPeriodNext: function() {
      const nextPeriod = this.getCurrentPeriod().add(1, "month").format("YYYY-MM");
      this.controller.set('period', nextPeriod);
    }
  }
});
