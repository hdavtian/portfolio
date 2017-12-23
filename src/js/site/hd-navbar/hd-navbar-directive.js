export default function(){
    return {
        // relative to site root
        scope: {
            config: '='
        },
        templateUrl: 'hd-navbar/hd-navbar.html',
        controller: ['$scope', function($scope){
            var hdNavbar = this;
            hdNavbar.msg = 'Kenshiro';
        }],
        controllerAs: 'hdNavbar',
        replace: true
    }
}