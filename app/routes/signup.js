import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.createRecord('user');
  },
  actions: {
    signup: function() {
      let user = this.controller.get('model');
      const email = user.get('email');
      const password = user.get('password');
      user.set('currency', 'USD');
      user.save().then(() => {
        this.get('session').authenticate('authenticator:oauth2', email, password);
      }).finally(() => { user.set('password', null); });
    }
  }
});
