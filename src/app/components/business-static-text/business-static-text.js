(function () {
    'use strict';

    var businessStaticText = {
        bindings: {
            visible: '='
        },
        templateUrl: 'components/business-static-text/business-static-text.html',
        controller: function() {
        }

    };

    angular
        .module('app.components')
        .component('businessStaticText', businessStaticText);
}());

