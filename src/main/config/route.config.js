export default function RouteConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/default");

    $stateProvider
        .state('default', {
            url: '/default',
            template: require('../default-page/default.view.html')
        })
        .state('/home', {
            url: '/home',
            templateUrl: 'home.view.html',
            controller: 'HomeController',
            controllerAs: 'home',
            resolve: {
                dependencies: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'HomeModule',
                        files: ['home.module.js']
                    });
                }]
            }
        })
        .state('/login', {
            url: '/login',
            templateUrl: 'login.view.html',
            controller: 'LoginController',
            controllerAs: 'login',
            resolve: {
                dependencies: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'LoginModule',
                        files: ['login.module.js']
                    });
                }]
            }
        })
}
RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
