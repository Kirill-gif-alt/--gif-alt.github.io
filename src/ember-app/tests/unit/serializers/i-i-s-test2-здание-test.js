import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test2-здание', 'Unit | Serializer | i-i-s-test2-здание', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test2-здание',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-test2-room',
    'model:i-i-s-test2-здание',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
