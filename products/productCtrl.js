angular.module('miniRouting').controller('productCtrl', function ($scope, productSvc, $stateParams) {

    if ($stateParams.id === 'shoes') {
        $scope.products = productSvc.shoeData
    } else if ($stateParams.id === 'socks') {
        $scope.produts = productSvc.sockData
    }
})