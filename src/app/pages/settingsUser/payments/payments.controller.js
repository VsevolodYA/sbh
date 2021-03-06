(function () {
    'use strict';

    angular
        .module('app.pages.settingsUser')
        .controller('PaymentsController', PaymentsController);

    /* @ngInject */
    function PaymentsController($scope,paymentsService,NgTableParams) {

        function getValue(row) {
            return row[this.field];
        }

        $scope.cols = [
            {
                field: "paymentDate",
                title: "Payment Date",
                show: true,
                format: 'raw',
                getValue: function (row) {
                    return row['paymentDate'] ? moment(row['paymentDate']).format('ll') : '-'
                }
            }, {
                field: "programName",
                title: "Businessprogram Name",
                show: true,
                format: 'raw',
                getValue: getValue
            }, {
                field: "costProduct",
                title: "Price for BUSINESSprogram/Build",
                show: true,
                getValue: getValue
            }, {
                field: "discount",
                title: "Discount/Promo code",
                show: true,
                getValue: getValue
            }, {
                field: "amountCharges",
                title: "Total amount charged",
                show: true,
                getValue: getValue
            }
        ];

        $scope.list = new NgTableParams({},
            {
                getData: function (params) {
                    return paymentsService.getAllPayments()
                        .then(function (response) {
                            return paymentsService.transformationData(response.data);
                        });
                }
            }
        );
    }
}());