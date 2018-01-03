export default function($scope, dataService){
    $scope.setBodyBackgroundColor('#fff');
    dataService.getData('portfolio.json').then(function(response){
        $scope.portfolio = response.data;
    })
}