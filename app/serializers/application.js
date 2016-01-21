import Ember from 'ember';
import DS from 'ember-data';

// this allows for Ember's JSONAPISerializer to accept underscored attributes (Rails AMS)
export default DS.JSONAPISerializer.extend({

  keyForAttribute: function(attr) {
    return Ember.String.underscore(attr);
  },

  keyForRelationship: function(rawKey) {
    return Ember.String.underscore(rawKey);
  }
});
