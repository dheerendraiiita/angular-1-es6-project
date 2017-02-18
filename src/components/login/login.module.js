import LoginController from './login.controller.js';
require('./login.style.styl');

angular.module('LoginModule', [])
    .controller('LoginController', LoginController)
