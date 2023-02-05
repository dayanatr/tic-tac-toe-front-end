import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service('store')
});

// import Route from '@ember/routing/route';
// import { inject as service } from '@ember/service';
// export default Route.extend({
//   store: Ember.inject.service(),

//   model() {
//     return this.get(store).findRecord('articles', 1);
//   },
// });
