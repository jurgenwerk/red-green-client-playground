import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  value: DS.attr('number'),
  changeType: DS.attr('string'),
  entryDate: DS.attr('string'),
  isExpense: Ember.computed('changeType', function(){
    return this.get('changeType') === 'expense';
  }),
  isIncome: Ember.computed.not('isExpense')
});
