export default function($scope, dataService){
    dataService.getData('portfolio.json').then(function(response){
        $scope.portfolio = response.data;
    })
}