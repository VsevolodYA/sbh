(function() {
    'use strict';

    angular
        .module('app.pages.yearGoal')
        .controller('CommitYourYearGoalController', CommitYourYearGoalController);

    function CommitYourYearGoalController($scope, pageService, activeStep, stepService, $state) {

        angular.extend($scope, activeStep.model, {
            forward: true,
            sendData: sendData,
            model: {
                first: 'Dropdown Label'
            }
        });

        pageService
            .reset()
            .setShowBC(false)
            .addCrumb({name: 'Dashboard', path: 'home'})
            .setPageTitle('Year Goal');

        function sendData() {
            stepService.updateActiveModel($scope);
            stepService.setFinishActiveStep();

            var nextStep = stepService.getNextAndPrevStep().nextStep;

            $state.go(nextStep.sref);
        }
    }
}());