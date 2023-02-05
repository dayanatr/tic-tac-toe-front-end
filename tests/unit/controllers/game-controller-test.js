import { module, test } from 'qunit';
import { setupTest } from 'front-end/tests/helpers';

module('Unit | Controller | game-controller', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:game-controller');
    assert.ok(controller);
  });
});
