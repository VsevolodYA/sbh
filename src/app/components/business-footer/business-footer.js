(function () {
    'use strict';

    var businessFooter = {
        bindings: {
            send: '&',
            forward: '='
        },
        controller: function (stepService, $timeout, $rootScope, $state,toaster) {
            var vm = this;

            vm.state = stepService.getNextAndPrevStep();

            vm.next = function () {
                if (vm.forward) {
                    vm.send();  //TODO: forward true, validation absent sccroll top
                } else {
                    toaster.pop({type: 'error', body: 'You should full fill all statements'});
                }
            };

            vm.prev = function () {
                $state.go(vm.state.prevStep.sref);
                // $timeout(scrollTop);
            };

        },
        templateUrl: 'components/business-footer/business-footer.html'
    };

    angular
        .module('app.components')
        .component('businessFooter', businessFooter);
}());