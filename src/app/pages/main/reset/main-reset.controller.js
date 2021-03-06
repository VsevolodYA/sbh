(function () {
    'use strict';

    angular
        .module('app.pages.main')
        .controller('MainResetController', MainResetController);

    /* @ngInject */
    function MainResetController($scope, $window, $auth, $state, toaster, pageService, userService) {

        // --- vars ---

        $scope.email = '';

        $scope.errors = {};

        // --- methods ---

        $scope.back = function () {
            $window.history.back();
        };

        $scope.submit = function () {
            userService.reset($scope.email)
                .then(
                    function (response) {
                        if (response.data.message) {
                            toaster.pop({type: 'success', body: response.data.message ? response.data.message : "Confirm email was sent!"});
                        }
                        // $scope.errors = response.data[0].errors;
                        // console.log('empty errors => ' + $scope.errors);
                    }
                )
                .catch(function(err) {
                    toaster.pop({type: 'error', body: "User is not found!"});
                });
        };

        // --- init ---

        pageService.reset().addCrumb({name: 'Reset', path: 'reset'});

    }
})();