import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('light-control-4', 'Integration | Component | light control 4', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{light-control-4}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#light-control-4}}
      template block text
    {{/light-control-4}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
