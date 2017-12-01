const solutionsComp = {
    templateUrl: '/templates/components/solutions.html',
    bindings: {
      products: '<'
    },

    controller: function() {
        this.greeting = 'hello';

        this.toggleGreeting = function() {
            this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
        }
    }
};

export default solutionsComp;