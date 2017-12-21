export default function($scope, $interval, $timeout, dataService) {

    // sliders
    $scope.slider = {
        a: {
            value: 50,
            options: {
                floor: 0,
                ceil: 450,
                onEnd: function(){
                    $scope.chartUpdate()
                }
            }
        },
        b: {
            value: 75,
            options: {
                floor: 0,
                ceil: 450,
                onEnd: function(){
                    $scope.chartUpdate()
                }
            }
        },
        c: {
            value: 150,
            options: {
                floor: 0,
                ceil: 450,
                onEnd: function(){
                    $scope.chartUpdate()
                }
            }
        }
    };
    // update chart
    $scope.chartUpdate = function(){
        $scope.data = [
            $scope.slider.a.value,
            $scope.slider.b.value,
            $scope.slider.c.value]
    }

    // chart init
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [$scope.slider.a.value, $scope.slider.b.value, $scope.slider.c.value];


    // setting start tab
    $scope.tab = 1;



}