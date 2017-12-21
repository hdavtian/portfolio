export default ['$scope', '$q', 'dataService', function($scope, $q, dataService,){

    dataService.getData('people.json').then(function(response){
        $scope.people = response.data;
    });

    dataService.getData('videos.json').then(function(response){
        $scope.videos = response.data;
    });

    // dataService.getData('modules.json').then(function(response){
    //     $scope.modules = response.data;
    // });

    let products = dataService.getData('products.json').then(function(response){
        $scope.products = response.data;
    });

    let modules = dataService.getData('modules.json').then(function(response){
        $scope.modules = response.data;
    });

    // settings will recall this function after modifying products on scope
    $scope.createModuleObjects = function(){
        // loop through products and modules and add an array of objects to products
        // to represent modules

        // console.log('ok back to createModuleObjects');
        // console.log($scope.products);

        var modulesObjects;

        for (var i=0, l=$scope.products.length; i<l; i++) {

            modulesObjects = [];

            for (var m=0, n=$scope.products[i].modules.length; m<n; m++){
                for (var x=0, y=$scope.modules.length; x<y; x++){
                    if ($scope.modules[x].title_short == $scope.products[i].modules[m]) {
                        modulesObjects.push($scope.modules[x]);
                    }
                }
            }// end inner for

            $scope.products[i].moduleObjects = modulesObjects;

        }//end outer for
    };

    // create module objects after both json files have been loaded
    $q.all([products, modules]).then(function(){
        $scope.createModuleObjects();
    });

    $scope.activeBgColor = "";

    $scope.peopleSearchTerm = "";

    $scope.setActiveBgColor = function(color){
        $scope.activeBgColor = color;
    };

    // config objects describing data
    $scope.productsConfig = {
        "name": "product",
        "fields": [
            {
                "name": "id",
                "editable": false,
                "type": "input",
                "dataType": "string"
            },
            {
                "name": "name",
                "editable": true,
                "type": "input",
                "dataType": "string"
            },
            {
                "name": "audience",
                "editable": true,
                "type": "input",
                "dataType": "string"
            },
            {
                "name": "bgColor",
                "editable": true,
                "type": "customColorPicker",
                "dataType": "customColorPicker",
                "customDirective": true
            },
            {
                "name": "description",
                "editable": true,
                "type": "textarea",
                "dataType": "string"
            },
            {
                "name": "modules",
                "editable": true,
                "type": "input",
                "dataType": "array"
            },
            {
                "name": "img1",
                "editable": true,
                "type": "input",
                "dataType": "string"
            },
            {
                "name": "img2",
                "editable": true,
                "type": "input",
                "dataType": "string"
            }
        ]
    };

    $scope.modulesConfig = {
        "name": "module",
        "fields": [
            {
                "name": "id",
                "editable": false,
                "type": "input",
                "dataType": "string"
            },
            {
                "name": "title_short",
                "editable": true,
                "type": "input",
                "dataType": "string"
            },
            {
                "name": "title_long",
                "editable": true,
                "type": "input",
                "dataType": "string"
            },
            {
                "name": "marketing_slogan",
                "editable": true,
                "type": "input",
                "dataType": "string"
            },
            {
                "name": "description",
                "editable": true,
                "type": "textarea",
                "dataType": "array"
            }
        ]
    };

    $scope.peopleConfig = {
        "name": "person",
        "fields": [
            {
                "name": "id",
                "editable": false,
                "type": "input",
                "dataType": "string"
            },
            {
                "name": "name",
                "editable": true,
                "type": "input",
                "dataType": "string"
            },
            {
                "name": "title",
                "editable": true,
                "type": "input",
                "dataType": "string"
            },
            {
                "name": "bio",
                "editable": true,
                "type": "textarea",
                "dataType": "string"
            },
            {
                "name": "img",
                "editable": true,
                "type": "input",
                "dataType": "string"
            }
        ]
    };

    $scope.videosConfig = {
        "name": "video",
        "fields": [
            {
                "name": "id",
                "editable": false,
                "type": "input",
                "dataType": "string"
            },
            {
                "name": "url",
                "editable": true,
                "type": "input",
                "dataType": "string"
            }
        ]
    };





}]