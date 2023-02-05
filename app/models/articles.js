// import Model from '@ember-data/model';
// import { attr } from '@ember-data/model';

// export default Model.extend({
//   title: attr(string),
//   body: attr(text),
// });
import DS from 'ember-data';

export default DS.Model.extend ({
  title: DS.attr(),
   body: DS.attr()
});