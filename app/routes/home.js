import Ember from 'ember';
import { service } from '@ember/service';
import RSVP from 'rsvp';
export default Ember.Route.extend({
  store: Ember.inject.service(),
        model() {
          // return this.store.findAll('articles');
  
        }
});
