export default function($scope, dataService){
    $scope.setBodyBackgroundColor('#fff');
    dataService.getData('resume.json').then(function(response){
        $scope.resume = response.data;
    })
}