(function () {
    'use strict';

    angular
        .module('app.pages.statement')
        .controller('StatementOverviewController', StatementOverviewController);

    /* @ngInject */
    function StatementOverviewController($scope, activeStep, pageService, stepService, $state) {

        angular.extend($scope, activeStep.model, {
            forward: true,
            sendData: sendData
        });

        pageService
            .reset()
            .setShowBC(false)
            .addCrumb({name: 'Dashboard', path: 'home'})
            .setPageTitle('BUSINESSstatement Overview');

        function sendData() {
            stepService.updateActiveModel($scope);
            stepService.setFinishActiveStep();

            var nextStep = stepService.getNextAndPrevStep().nextStep;

            $state.go(nextStep.sref);
        }
    }
}());