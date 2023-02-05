import { module, test } from 'qunit';
import { setupTest } from 'front-end/tests/helpers';

module('Unit | Service | toastr', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:toastr');
    assert.ok(service);
  });
});
