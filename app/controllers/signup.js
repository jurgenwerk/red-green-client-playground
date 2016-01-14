import Ember from 'ember';

export default Ember.Controller.extend({
  user: Ember.computed.alias('model'),
  actions: {
    signup: function() {
      this.get('user').save().then(
        (user) => {
          window.location = "/";
        },
        (response) => {
          console.log("signup fail");
        }
      );
    }
  }
});
