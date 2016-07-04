export default function(){
	this.transition(
    	this.toRoute(['index', 'scenes', 'scheduler', 'review', 'settings']),
    	this.use('fade', {duration: 250})
  	);
  	this.transition(
    	this.hasClass('room-drawer'),
    	this.toValue(true),
    	this.use('wait', 170, {then: 'toDown'}),
    	this.reverse('fade', {duration: 20})
  	);
}