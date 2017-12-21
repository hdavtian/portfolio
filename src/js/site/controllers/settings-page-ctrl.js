export default function($scope){

    $scope.delete = function(id, context){
        console.log('deleting ',id);
        console.log('context: ', context);

        for (var i=0, l=context.length; i<l; i++) {
            if (context[i].id === id) {
                context.splice(i, 1);
                break;
            }
        }

        console.log('new context: ', context);

        // after removing, recreate relationships to reflect
        // correct modules for each product
        $scope.createModuleObjects();
    }

    $scope.tab = 1;

    // config objects for my column-sorter directive

    $scope.productsListConfig = {
        sortType: 'id',
        sortReverse: false
    };

    $scope.peopleListConfig = {
        sortType: 'id',
        sortReverse: false
    };

    $scope.videosListConfig = {
        sortType: 'id',
        sortReverse: false
    };

    $scope.modulesListConfig = {
        sortType: 'title_short',
        sortReverse: false
    };

}