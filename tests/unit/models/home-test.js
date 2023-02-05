import { module, test } from 'qunit';

import { setupTest } from 'front-end/tests/helpers';

module('Unit | Model | home', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('home', {});
    assert.ok(model);
  });
});
