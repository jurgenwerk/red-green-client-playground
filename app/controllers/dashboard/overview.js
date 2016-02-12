import Ember from 'ember';
import BalanceChangePropertiesMixin from '../../mixins/balance-change-properties';

export default Ember.Controller.extend(BalanceChangePropertiesMixin, {
  dashboard: Ember.inject.controller(),
  avgExpensePerDay: Ember.computed('period', 'expenseSum', function() {
    const dateParts = this.get('dashboard.period').split("-");
    const year = dateParts[0];
    const month = dateParts[1];
    const daysInMonth = new Date(year, month, 0).getDate();
    return this.get('expenseSum')/daysInMonth;
  })
});
