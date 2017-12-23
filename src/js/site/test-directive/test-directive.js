export default function(){
    return {
        templateUrl: 'test-directive/test-directive-view.html',
        controller: ['$scope', function($scope){
            $scope.msg = 'Hello World from my test directive'
        }]
    }
}