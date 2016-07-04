import { test } from 'qunit';
import moduleForAcceptance from 'domovoi-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | room view');

test('visiting /room-view', function(assert) {
  visit('/room-view');

  andThen(function() {
    assert.equal(currentURL(), '/room-view');
  });
});
