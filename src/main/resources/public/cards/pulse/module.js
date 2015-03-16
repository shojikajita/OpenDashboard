(function(angular) {
'use strict';
    
angular
.module('od.cards.pulse', ['OpenDashboardRegistry', 'OpenDashboardAPI'])
 .config(function(registryProvider){
    registryProvider.register('pulse',{
        title: 'Pulse',
        description: 'This card demonstrates student activity over time.',
        imgUrl: '',
        cardType: 'pulse',
        styleClasses: 'od-card col-xs-12',
	    config: [
	    ]
    });
 })
 .controller('PulseController', function($scope, $log) {
	
});

})(angular);
