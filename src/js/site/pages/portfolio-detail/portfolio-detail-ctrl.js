export default function($scope, $stateParams, $timeout, $sce, dataService){

    $scope.setBodyBackgroundColor('#fff');
    dataService.getData('portfolio.json').then(function(response){
        // add id
        for (var i=0, l=response.data.length; i<l; i++) {
            response.data[i].id = i;
        };
        $scope.portfolio = response.data;

        for (var i=0, l=$scope.portfolio.length; i<l; i++) {
            if($scope.portfolio[i].id == $stateParams.id){
                $scope.project = $scope.portfolio[i];
                return;
            }
        }

        // trusted html
    });

    $scope.trustHtml = function(content){
        return $sce.trustAsHtml(content)
    }

}