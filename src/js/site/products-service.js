export default ['$http', function($http){
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++');
    this.getData = function(){
        return $http({
            method: 'get',
            url: 'data/products.json'
        })
    }
}]
