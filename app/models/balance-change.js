import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  value: DS.attr('number'),
  changeType: DS.attr('string'),
  entryDate: DS.attr('string')
});
