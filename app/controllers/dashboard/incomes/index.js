import Ember from 'ember';
import BalanceChangePropertiesMixin from 'red-green-client/mixins/balance-change-properties';

export default Ember.Controller.extend(BalanceChangePropertiesMixin, {
  actions: {
    delete: function(balanceChange) {
      if (confirm("Are you sure?")) {
        balanceChange.destroyRecord().then(() => this.send('refreshRoute'));
      }
    }
  }
});
