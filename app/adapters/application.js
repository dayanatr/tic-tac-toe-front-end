// import JSONAPIAdapter from '@ember-data/adapter/json-api';
// import DS from 'ember-data';
// export default DS.RESTAdapter.extend({
//   // namespace: 'api',
//   host: 'http://localhost:3000',
// });
import DS from "ember-data";

var ApplicationAdapter = DS.ActiveModelAdapter.extend({
    host: 'http://localhost:3000'
    // namespace: 'api/v1'
});

export default ApplicationAdapter;
