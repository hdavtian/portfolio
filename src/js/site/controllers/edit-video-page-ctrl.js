export default function($scope, $stateParams, $state){

    for (var i=0, l=$scope.videos.length; i<l; i++) {
        if ($stateParams.videoId == $scope.videos[i].id) {
            $scope.video = $scope.videos[i]
        }
    }

}