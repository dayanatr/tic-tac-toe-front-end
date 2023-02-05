import Ember from 'ember';

// export default Ember.Service.extend({
//   store: Ember.inject.service('store')
// });
export default Ember.Service.extend({
  store: Ember.inject.service(),

//   model() {
//     // return this.store.findAll('articles');
//     this.store.findAll('articles').then(function (data){
//     // this.store.findRecord('articles', 1).then(function (data) {
//         console.log(data)
//     });
//   },
});