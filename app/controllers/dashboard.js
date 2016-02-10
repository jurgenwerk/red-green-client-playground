import Ember from 'ember';
import BalanceChangePropertiesMixin from 'red-green-client/mixins/balance-change-properties';
import moment from 'moment';

export default Ember.Controller.extend(BalanceChangePropertiesMixin, {
  application: Ember.inject.controller(),
  queryParams: ['period'],
  period: (new Date()).toISOString().slice(0, 7),
  getCurrentPeriod () {
    return moment(this.get('period'));
  },
  actions: {
    goPeriodBack: function() {
      const previousPeriod = this.getCurrentPeriod().subtract(1, "month").format("YYYY-MM");
      this.set('period', previousPeriod);
    },
    goPeriodNext: function() {
      const nextPeriod = this.getCurrentPeriod().add(1, "month").format("YYYY-MM");
      this.set('period', nextPeriod);
    },
    logout() {
      this.get('application').send('logout');
    }
  }
});
