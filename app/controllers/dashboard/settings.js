import Ember from 'ember';

export default Ember.Controller.extend({
  currenciesData: Ember.inject.service(),
  session: Ember.inject.service(),
  updatedUserProperties: Ember.Object.create(),
  actions: {
    selectCurrency: function(currencyCode){
      this.set('updatedUserProperties.currency', currencyCode);
    }
  }
});
