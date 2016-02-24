import Ember from 'ember';
import ENV from "../config/environment";

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  actions: {
    signup: function(email, password) {
      const userParams = {
        data: {
          attributes: {
            email: email,
            password: password,
            currency: 'USD'
          }
        }
      }

      const request = this.get('ajax').request(`${ENV.apiBaseURL}/users`, {
        method: 'POST',
        data: userParams
      });

      request.then(() => {
        this.get('session').authenticate('authenticator:oauth2', email, password);
      }).catch((response) => {
        this.controller.set('signupError', 'Signup error.');
      });
    }
  }
});
