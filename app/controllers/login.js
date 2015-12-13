import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login() {
      let username = this.username;
      let password = this.password;
      this.get('session').authenticate('authenticator:oauth2', username, password)
        .catch((reason) => {
          this.set('errorMessage', reason.error || reason);
        }
      );
    }
  }
});
