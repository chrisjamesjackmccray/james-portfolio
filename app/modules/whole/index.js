import angular from 'angular';
import config from './config';

import homeController from './controllers/home';
import portfolioController from './controllers/portfolio';
import aboutController from './controllers/about';

let whole = angular.module('tiy.whole', []);

whole.config(config);
whole.controller('HomeController', homeController);
whole.controller('PortfolioController', portfolioController);
whole.controller('AboutController', aboutController);


export default whole;
