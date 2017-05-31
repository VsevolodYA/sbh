(function () {
    'use strict';

    var businessLeftPanel = {
        controllerAs: 'businessLeftPanel',
        controller: function ($scope, stepService) {
            $scope.subList = {
                businessMindset: [],
                businessStatement: [],
                yearGoals: [],
                idealClients: [],
                actionPlans: [],
                execute: []
            };

            $scope.checkMindset = false;
            $scope.checkStatement = false;
            $scope.checkYearGoal = false;
            $scope.checkIdealClient = false;
            $scope.checkActionPlan = false;
            $scope.checkExecute = false;

            stepService.getAllSteps().forEach(function (item) {
                switch (item.sref.split(".")[0]) {
                    case 'mindset':
                        $scope.subList.businessMindset.push(item);
                        break;
                    case 'statement':
                        $scope.subList.businessStatement.push(item);
                        break;
                    case 'yearGoal':
                        $scope.subList.yearGoals.push(item);
                        break;
                    case 'idealClient':
                        $scope.subList.idealClients.push(item);
                        break;
                    case 'actionPlan':
                        $scope.subList.actionPlans.push(item);
                        break;
                    case 'execute':
                        $scope.subList.execute.push(item);
                        break;
                }
            });
        },
        templateUrl: 'components/business-left-panel/leftPanel.html'
    };

    angular
        .module('app.components')
        .component('businessLeftPanel', businessLeftPanel);
}());