export default ['$http', function($http){
    this.getData = function(file){
        return $http({
            method: 'get',
            url: 'data/' + file
        })
    }
}]
