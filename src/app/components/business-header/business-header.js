(function () {
    'use strict';

    var businessHeader = {
        binding: {},
        controller: function ($auth, $state, userService, $window) {
            var vm = this;

            userService.loadUser()
                .then(function(user) {
                    vm.user = user;
                });

            this.logout = function (e) {
                e.preventDefault();
                $auth.logout();
                $window.location.reload();
                $state.go('login');
            }
        },
        templateUrl: 'components/business-header/business-header.html'
    };

    angular
        .module('app.components')
        .component('businessHeader', businessHeader);
}());