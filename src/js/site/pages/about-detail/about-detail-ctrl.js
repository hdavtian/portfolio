export default function($scope, $timeout, $stateParams, dataService){

    dataService.getData('things.json').then(function(response){
        $scope.things = response.data;
    });

    $timeout(function(){
        for (var i=0, l=$scope.things.length; i<l; i++) {
            if ($scope.things[i].name === $stateParams.id) {
                $scope.thing = $scope.things[i];
                return;
            }
        }
    },100)


    // get thing detail


}