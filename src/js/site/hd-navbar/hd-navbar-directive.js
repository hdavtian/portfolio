export default function(){
    return {
        // relative to site root
        scope: {
            config: '='
        },
        templateUrl: 'hd-navbar/hd-navbar.html',
        controllerAs: 'hdNavbar',
        replace: true,
        controller: ['$scope', function($scope){
            //
        }],
        link: function($scope, $element, $attrs) {

            // hamburgers from
            // https://jonsuh.com/hamburgers/
            var hamburger = document.querySelector(".hamburger");
            // On click
            hamburger.addEventListener("click", function() {
                // Toggle class "is-active"
                hamburger.classList.toggle("is-active");
                // Do something else, like open/close menu
            });

        }
    }
}