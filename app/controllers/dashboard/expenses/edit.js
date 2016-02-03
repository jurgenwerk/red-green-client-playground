import Ember from 'ember';

export default Ember.Controller.extend({
  balanceChange: Ember.computed.alias('model'),
  actions: {
    onEntryDateSelected: function(entryDate) {
      this.set('balanceChange.entryDate', moment(entryDate).format('YYYY-MM-DD'));
    },
    save: function(properties) {
      this.get('balanceChange').setProperties(properties);
      this.get('balanceChange').save().then(() => {
        this.send('refreshRoute');
        this.transitionToRoute('dashboard.expenses.index');
      });
    }
  }
});
