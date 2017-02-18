// home.modules.js
import HomeController from './home.controller.js';
//import './vendor.style.styl';
require('./home.style.css');

angular.module('HomeModule', [])
    .controller('HomeController', HomeController)
