import Ember from 'ember';

export default Ember.Controller.extend({
  balanceChanges: Ember.computed.alias('model'),
  incomes: Ember.computed('balanceChanges.[]', function() {
    return this.get('balanceChanges').filterBy('changeType', 'income');
  }),
  expenses: Ember.computed('balanceChanges.[]', function() {
    return this.get('balanceChanges').filterBy('changeType', 'expense');
  })
});
