import RouteConfig from './config/route.config.js';


import DefaultController from './default-page/default.controller.js';

import ExampleDirective from './directive/example.directive.js';
import ExampleService from './service/example.service.js';

angular.module('mainApp', [
        'ngMaterial',
        'ngMessages',
        'ui.router',
        'oc.lazyLoad',
    ])
    .controller('MainController', [function() {
        var self = this;

        this.title = "Main Page";
    }])
    .config(RouteConfig)
    .controller('DefaultController', DefaultController)
	.service('exampleService', ExampleService)
	.directive('exampleDirective', () => new ExampleDirective);    
