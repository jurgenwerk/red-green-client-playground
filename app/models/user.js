import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  currenciesData: Ember.inject.service(),
  email: DS.attr('string'),
  currency: DS.attr('string'),
  password: DS.attr('string'),
  currencySymbol: Ember.computed('currency', function() {
    return this.get('currenciesData.currencies').findBy('cc', this.get('currency')).symbol;
  })
});
