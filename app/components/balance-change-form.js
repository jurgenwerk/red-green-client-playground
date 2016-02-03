import Ember from 'ember';
import accounting from "accounting"

export default Ember.Component.extend({
  didReceiveAttrs() {
    if (!this.get('balanceChange.isNew')) {
      const formattedValue = this.formatValue(this.get('balanceChange.value'));
      this.set('valueInCents', this.get('balanceChange.value'));
      this.set('displayValue', formattedValue);
    }
  },
  formatValue(value) {
    // take cents and turn it into display value for input
    return accounting.formatMoney(value/100, "");
  },
  unformatInput(input) {
    // take the user input and turn it into cents
    return Math.round(accounting.unformat(input)*100);
  },
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
      this.get('save')(properties);
    },
    setEntryDate: function(entryDate) {
      this.set('entryDate', entryDate);
    },
    onValueChange: function(value) {
      this.set('valueInCents', this.unformatInput(value));
    }
  }
});
