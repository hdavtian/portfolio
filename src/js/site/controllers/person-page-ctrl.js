export default function($scope, $stateParams, $state, dataService){

    for (var i=0, l=$scope.people.length; i<l; i++) {
        if ($stateParams.personName == $scope.people[i].name.toLowerCase().replace(' ', '-')) {
            $scope.person = $scope.people[i];
        }
    }

}