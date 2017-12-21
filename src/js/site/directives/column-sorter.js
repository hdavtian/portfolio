export default function(){
    return {
        scope: {
            title: '@',
            config: '='
        },
        restrict: 'E',
        template: `
            <a ng-click="config.sortType=title; config.sortReverse = !config.sortReverse" href="javascript:void(0)">{{title}}</a>        
            <i ng-show="config.sortReverse==true && config.sortType==title" class="fa fa-caret-up" aria-hidden="true"></i>
            <i ng-show="config.sortReverse==false && config.sortType==title" class="fa fa-caret-down" aria-hidden="true"></i>
        `
    }
}