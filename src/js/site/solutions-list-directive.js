export default function(){
    return {
        restrict: 'E',
        templateUrl: '/templates/directives/solutions-list.html',
        controller: ['$scope', function($scope){
            console.log('solutions-list directive called ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
            $scope.msg = 'test';
        }]
    }
}