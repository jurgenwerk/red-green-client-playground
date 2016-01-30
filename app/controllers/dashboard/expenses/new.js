import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    onEntryTimeSelected: function(entryTime) {
      this.model.set('entryTime', entryTime);
    }
  }
});
