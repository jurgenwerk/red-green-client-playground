import Ember from 'ember';

export default Ember.Component.extend({
  barStyle: Ember.computed('widthPercent', function() {
    return Ember.String.htmlSafe(`width: ${this.get('widthPercent')}%`);
  })
});
