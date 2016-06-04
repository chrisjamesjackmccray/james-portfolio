function config($stateProvider) {
  $stateProvider
  .state("home", {
    url: '/',
    controller: 'HomeController as homeCtrl',
    template: require('./views/home.html')
  })
  .state("portfolio", {
    url: '/portfolio',
    controller: 'PortfolioController as portfolioCtrl',
    template: require('./views/portfolio.html')
  })
  .state("about", {
    url: '/about',
    controller: 'AboutController as aboutCtrl',
    template: require('./views/about.html')
  });
}

export default config;
