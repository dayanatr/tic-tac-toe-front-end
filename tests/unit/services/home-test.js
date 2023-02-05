import { module, test } from 'qunit';
import { setupTest } from 'front-end/tests/helpers';

module('Unit | Service | home', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:home');
    assert.ok(service);
  });
});
