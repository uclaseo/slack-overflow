// (function() {
//   angular.module('slackOverflowApp')
//   .config(function($provide, authProvider, $urlRouterProvider, $stateProvider, $httpProvider, jwtInterceptorProvider){
//     authProvider.init({
//       domain: 'inseok-ucla.auth0.com',
//       clientID: 'ku4AUn23UfSipuIY4l8e8WovJ10X5XuY'
//     });
//     $urlRouterProvider.otherwise('/home');
//     $stateProvider
//       .state('home', {
//         url: '/home',
//         templateUrl: './public/components/templates/slackOverflow.html'
//       })
//       .state('profile', {
//         url: '/profile',
//         templateUrl: './public/components/templates/profile.html',
//         controllerAs: 'profileController as user'
//       })
//   })

// })();