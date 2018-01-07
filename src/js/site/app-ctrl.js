export default function($scope){

    // config object for sitenav, used by 'hd-navbar' directive
    $scope.hdNavbarConfig = {
        "menuItems": [
            {
                "id": 1,
                "title": 'about',
                "state": 'about',
            },
            {
                "id": 2,
                "title": 'resume',
                "state": 'resume',
            },
            {
                "id": 3,
                "title": 'portfolio',
                "state": 'portfolio',
            }
        ]
    };

    // function to set body background color
    $scope.setBodyBackgroundColor = function(color){
      $('body').css('background-color', color)
    }

}