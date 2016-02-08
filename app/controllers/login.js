import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login() {
      const username = this.get('username');
      const password = this.get('password');
      this.get('session').authenticate('authenticator:oauth2', username, password)
        .catch(() => { this.set('errorMessage', "Invalid login."); }
      );
    }
  }
});
