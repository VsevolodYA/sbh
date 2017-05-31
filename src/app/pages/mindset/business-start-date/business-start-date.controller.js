(function () {
    'use strict';

    angular
        .module('app.pages.mindset')
        .controller('BusinessStartDateController', BusinessStartDateController);

    /* @ngInject */
    function BusinessStartDateController($scope, $state, pageService, stepService, activeStep,toaster) {

        $scope.visible = true;

        var date = new Date();
        var currentMonth = date.getMonth().toString();
        var currentYear = date.getFullYear();

        angular.extend($scope, activeStep.model, {
            forward: true,
            sendData: sendData
        });

        if ($scope.data.year === null) {
            $scope.data.year = currentYear
        }

        if ($scope.data.month === null) {
            $scope.data.month = currentMonth
        }

            $scope.$watch('data.month', function (value) {
                if (value !== undefined) {
                    if (+value < +currentMonth) {
                        $scope.data.year += 1;
                    } else {
                        $scope.data.year = currentYear;
                    }
                }
            });

        pageService
            .reset()
            .setShowBC(false)
            .addCrumb({name: 'Dashboard', path: 'home'})
            .setPageTitle('Your BUSINESS Start Date');

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