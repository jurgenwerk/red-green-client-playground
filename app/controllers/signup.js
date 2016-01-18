import Ember from 'ember';

export default Ember.Controller.extend({
  user: Ember.computed.alias('model'),
  actions: {
    signup: function() {
      const email = this.get('user.email');
      const password = this.get('user.password');

      this.get('user').save().then(() => {
        this.get('session').authenticate('authenticator:oauth2', email, password);
      });
    }
  }
});
