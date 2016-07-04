import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['light-color'],
	colors: [ Ember.Object.create({
	id: 1,
	name: 'Violet',
  	webColor: '#EE82EE',
  	hexCode: '00'
  	}), Ember.Object.create({
  	id: 2,
	name: 'Royal Blue',
  	webColor: '#4169E1',
  	hexCode: '10'
  	}), Ember.Object.create({
  	id: 3,
	name: 'Light Sky Blue',
  	webColor: '#87CEFA',
  	}), Ember.Object.create({
  	id: 4,
	name: 'Aqua',
  	webColor: '#00FFFF',
  	hexCode: '30'
  	}), Ember.Object.create({
  	id: 5,
	name: 'Aqua Marine',
  	webColor: '#7FFFD4',
  	hexCode: '40'
  	}), Ember.Object.create({
  	id: 6,
	name: 'Sea Green',
  	webColor: '#2E8B57',
  	hexCode: '50'
  	}), Ember.Object.create({
  	id: 7,
	name: 'Green',
  	webColor: '#008000',
  	hexCode: '60'
    }), Ember.Object.create({
  	id: 8,
	name: 'Lime Green',
  	webColor: '#32CD32',
  	hexCode: '80'
  	}), Ember.Object.create({
  	id: 9,
	name: 'Yellow',
  	webColor: '#FFFF00',
  	hexCode: '70'
    }), Ember.Object.create({
  	id: 10,
	name: 'Goldenrod',
  	webColor: '#DAA520',
  	hexCode: '90'
 	}), Ember.Object.create({
  	id: 11,
	name: 'Orange',
  	webColor: '#FFA500',
  	hexCode: 'A0'
  	}), Ember.Object.create({
  	id: 12,
	name: 'Red',
  	webColor: '#FF0000',
  	hexCode: 'B0'
  	}), Ember.Object.create({
  	id: 13,
	name: 'Pink',
  	webColor: '#FFC0CB',
  	hexCode: 'C0'
  	}), Ember.Object.create({
  	id: 14,
	name: 'Fuchsia',
  	webColor: '#FF00FF',
  	hexCode: 'D0'
  	}), Ember.Object.create({
  	id: 15,
	name: 'Orchid',
  	webColor: '#DA70D6',
  	hexCode: 'E0'
  	}), Ember.Object.create({
  	id: 16,
	name: 'Lavender',
  	webColor: '#E6E6FA',
  	hexCode: 'F0'
	})],
	colorButtons: Ember.computed.map('colors', function(color) {
    	return Ember.String.htmlSafe('background-color: ' + color.webColor);
  	}),
	actions: {
	}
});