(function () {
    'use strict';

    angular
        .module('app.pages.mindset')
        .controller('BusinessMindsetController', BusinessMindsetController);

    /* @ngInject */
    function BusinessMindsetController($scope,pageService,activeStep,stepService,$state) {
        angular.extend($scope, activeStep.model, {
            forward: true,
            sendData: sendData
        });

        pageService
            .reset()
            .setShowBC(false)
            .addCrumb({name: 'Dashboard', path: 'home'})
            .setPageTitle('Get the BUSINESSmindset ');

        function sendData() {
            stepService.updateActiveModel($scope);
            stepService.setFinishActiveStep();
            var nextStep = stepService.getNextAndPrevStep().nextStep;
            $state.go(nextStep.sref);
        }
    }
}());