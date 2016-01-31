import Ember from 'ember';

export default Ember.Component.extend({
  humanInputValue: '',
  valueInCents: Ember.computed('humanInputValue', function() {
    // cents
    const humanInputValue = String(this.get('humanInputValue'));
    if (humanInputValue.includes(".") || humanInputValue.includes(".")) {
      return parseInt(String(humanInputValue).replace(/,/g, '').replace(/\./g, '').trim());
    } else {
      return parseInt(humanInputValue) * 100;
    }
  }),
  dateForInput: Ember.computed('balanceChange.entryDate', function() {
    return new Date(this.get('balanceChange.entryDate'));
  }),
  actions: {
    save: function() {
      const entryDate = this.get('entryDate') || this.get('balanceChange.entryDate');
      const formattedEntryDate = moment(entryDate).format('YYYY-MM-DD');
      const properties = {
        value: this.get('valueInCents'),
        entryDate: formattedEntryDate
      };
      this.sendAction('save', properties);
    },
    setEntryDate: function(entryDate) {
      this.set('entryDate', entryDate);
    }
  }
});
