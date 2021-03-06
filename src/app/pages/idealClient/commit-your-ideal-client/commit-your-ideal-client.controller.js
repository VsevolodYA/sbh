(function () {
    'use strict';

    angular
        .module('app.pages.idealClient')
        .controller('CommitYourIdealClientController', CommitYourIdealClientController);

    function CommitYourIdealClientController($scope, activeStep, pageService,stepService, $state, userService,toaster) {

        angular.extend($scope, activeStep.model, {
            first: ['does', 'provides', 'sells'],
            third: ['for', 'to'],
            fifth: ['Market size', 'Local', 'Regional', 'National', 'Global'],
            privilegesData: {
                resultList: ['provide for my family', 'create jobs', 'give more to my community', 'helping the economy'],
                second: ['providing', 'creating', 'giving', 'helping']
            },
            showWhatInput: false,
            forward: true,
            sendData: sendData
        });

        var originalData, originalPrivilagesData;

        userService.getUser().then(function (user) {
            $scope.businessName = user.businessName;
        });

        getData();  // TODO: request api? data service no reload

        function getData() {

            stepService.getApiData('allMindsetUser') //TODO: Think over the dynamics url
                .then(function (response) {
                    if (response && response.status === 200) {
                        angular.extend($scope, {
                            privilegeInfo: _.get(response, 'data.privilegeAndResponsibility', {})
                        });

                        originalPrivilagesData = _.clone($scope.privilegeInfo);
                    }
                })
                .catch(function(err) {
                    toaster.pop({type: 'error', body: 'Whoops, unauthorized'});
                });

            return stepService.getApiData('yourStatement') //TODO: Think over the dynamics url
                .then(function (response) {
                    if (response && response.status === 200) {
                        $scope.data = _.get(response, 'data.yourStatement', []);
                        originalData = _.clone($scope.data);
                    }
                });
        }

        pageService
            .reset()
            .setShowBC(false)
            .addCrumb({name: 'Dashboard', path: 'home'})
            .setPageTitle('Statement');

        function sendData() {

            stepService.updateActiveModel($scope);
            stepService.setFinishActiveStep();

            var nextStep = stepService.getNextAndPrevStep().nextStep;

            if (angular.equals($scope.data, originalData) && angular.equals($scope.privilegeInfo, originalPrivilagesData)) {
                $state.go(nextStep.sref);
            } else {
                updateData().then(function () {
                    $state.go(nextStep.sref);
                });
            }
        }

        function updateData() {
            return new Promise(function (resolve, reject) {

                var statementResolve = true;
                var privilegesResolve = true;

                if (!angular.equals($scope.data, originalData)) {

                    statementResolve = false;

                    stepService.sendApiData('yourStatement', $scope.data)
                        .then(function () {
                            statementResolve = true;
                            if (privilegesResolve) {
                                resolve();
                            }
                        })
                        .catch(function () {
                            reject();
                        });
                }

                if (!angular.equals($scope.privilegeInfo, originalPrivilagesData)) {

                    privilegesResolve = false;

                    if ($scope.privilegeInfo.resultId !== originalPrivilagesData.resultId) {
                        var oldKey = getKeyById(originalPrivilagesData.resultId); // field in which the 'primary driver' was stored
                        var newKey = getKeyById($scope.privilegeInfo.resultId);   // field in which it is now
                        var temp = _.clone($scope.privilegeInfo[newKey]);
                        $scope.privilegeInfo[newKey] = 'My primary driver';
                        $scope.privilegeInfo[oldKey] = temp;
                    }

                    // update result label value for privileges and responsibility
                    $scope.privilegeInfo.result = $scope.privilegesData[+$scope.privilegeInfo.resultId];

                    stepService.sendApiData('privilegeAndResponsibility', $scope.privilegeInfo)
                        .then(function () {
                            privilegesResolve = true;
                            if (statementResolve) {
                                resolve();
                            }
                        })
                        .catch(function () {
                            reject();
                        });
                }
            });
        }

        function getKeyById(id) {

            var res;

            switch (id) {

                case '0':
                    res = 'first';
                    break;

                case '1':
                    res = 'second';
                    break;

                case '2':
                    res = 'third';
                    break;

                case '3':
                    res = 'fourth';
                    break;

                default:
                    res = 'first';
                    break;
            }

            return res;
        }
    }
}());