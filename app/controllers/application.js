import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    login() {
      let username = "";
      let password = "";
      this.get('session').authenticate('authenticator:oauth2', username, password)
        .catch((reason) => {
          this.set('errorMessage', reason.error || reason);
        }
      );
    }
  }
});
