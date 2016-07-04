import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('scenes');
  this.route('scheduler');
  this.route('review');
  this.route('settings');
});

export default Router;
