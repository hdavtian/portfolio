export default function($scope, $stateParams, $state){

    // get the selected product
    for (var i=0, l=$scope.products.length; i<l; i++){
        if ($stateParams.productId == $scope.products[i].id) {
            $scope.product = $scope.products[i];
            break;
        }
    }

    // Angular Color Picker Module
    // https://ruhley.github.io/angular-color-picker/
    $scope.options = {
        format: 'hexString'
    };

    $scope.color = $scope.product.bgColor;

    // update the selected product
    $scope.updateProduct = function(){

        let newValues = {
            id: $scope.product.id,
            name: $('#productName').val(),
            audience: $('#productAudience').val(),
            // bgColor: $('#productBgColor').val(),
            bgColor: $scope.color,
            description: $('#productDescription').val(),
            modules: function(){
                var oldModules = $('#productModules').val().replace(" ", "").split(',');
                var newModules = [];
                for (var i=0, l=oldModules.length; i<l; i++) {
                    newModules.push(oldModules[i]);
                };
                return newModules;
            }(),
            img1: $scope.product.img1,
            img2: $scope.product.img2
        };

        for (var i=0, l=$scope.products.length; i<l; i++) {
            if ($scope.product.id === $scope.products[i].id) {
                $scope.products[i] = newValues;
                break;
            }
        };

        $scope.createModuleObjects();

        $state.go('settings');

    }

}