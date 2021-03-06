(function () {
    'use strict';

    angular
        .module('app.pages.mindset')
        .controller('AreYourStuckController', AreYourStuckController);

    /* @ngInject */
    function AreYourStuckController($scope, activeStep, mindsetService, pageService, stepService, $state,toaster) {

        angular.extend($scope, activeStep.model, {
            forward: true,
            sendData: sendData
        });

        if($scope.data === null) {
            $scope.data = mindsetService.getStuckSliders();
        }

        pageService
            .reset()
            .setShowBC(false)
            .addCrumb({name: 'Dashboard', path: 'home'})
            .setPageTitle('Are You Stuck?');

        function sendData() {
            stepService.updateActiveModel($scope);
            stepService.setFinishActiveStep();

            var nextStep = stepService.getNextAndPrevStep().nextStep;
            var urls = activeStep.sref.split('.');

            return stepService.sendApiData(urls[urls.length - 1], $scope.data)
                .then(function () {
                    $state.go(nextStep.sref);
                })
                .catch(function(err) {
                    toaster.pop({type: 'error', body: 'Whoops, unauthorized'});
                });
        }
    }
}());