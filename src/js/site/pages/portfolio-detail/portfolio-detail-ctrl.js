export default function($scope, $stateParams, $timeout, dataService){

    $scope.setBodyBackgroundColor('#fff');
    dataService.getData('portfolio.json').then(function(response){
        $scope.portfolio = response.data;
    });

    for (var i=0, l=$scope.portfolio.length; i<l; i++) {
        if($scope.portfolio[i].id == $stateParams.id){
            $scope.project = $scope.portfolio[i];
            return;
        }
    }

}