export default function(){
    return {
        restrict: 'E',
        templateUrl: '/templates/directives/solutions.html',
        controller: ['$scope', function($scope){
            console.log('directive called ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
            $scope.msg = 'test';
        }]
    }
}