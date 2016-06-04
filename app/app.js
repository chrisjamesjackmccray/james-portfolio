import angular from 'angular';
import uiRouter from 'angular-ui-router';

import firebase from 'firebase';
import angularFire from 'angularfire';
import angularScroll from 'angular-scroll';
import whole from './modules/whole';

let App = angular.module('app', [
  'ui.router',
  'firebase',
  'duScroll',
  'tiy.whole',
]);

function config($urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
}

App.value('duScrollOffset', 60);

App.config(config);
