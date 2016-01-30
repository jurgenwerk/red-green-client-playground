import Ember from 'ember';
import BalanceChangePropertiesMixin from 'red-green-client/mixins/balance-change-properties';

export default Ember.Controller.extend(BalanceChangePropertiesMixin, {
  moment: Ember.inject.service(),
  queryParams: ['period'],
  period: (new Date()).toISOString().slice(0, 7)
});
