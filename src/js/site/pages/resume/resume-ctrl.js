export default function($scope, dataService){
    dataService.getData('resume.json').then(function(response){
        $scope.resume = response.data;
    })
}