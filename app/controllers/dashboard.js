import Ember from 'ember';

export default Ember.Controller.extend({
  moment: Ember.inject.service(),
  queryParams: ['period'],
  period: (new Date()).toISOString().slice(0, 7)
});
