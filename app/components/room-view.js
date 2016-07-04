import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['room-view'],
	actions: {
		toggleLightControl() {
			this.toggleProperty('isShowingLightControl');
			if (this.get('isShowingRoomSetup')) {
				this.toggleProperty('isShowingRoomSetup');
			}
		},
		toggleRoomSetup() {
			this.toggleProperty('isShowingRoomSetup');
			if (this.get('isShowingLightControl')) {
				this.toggleProperty('isShowingLightControl');
			}
		}
	}
});
