(function() {
  angular
    .module('slackOverflowApp')
    .service('authService', ['$http', 'userService', 'chatService', function($http, userService, chatService) {

      this.registerUser = (data) => {
        const user = {
          user: data.email,
          image: data.picture
        };
        console.log('this is email from registerUser', user);
        return $http.post('/users', user)
          .then((success) => {
            userService.getUserInfo(data);
            chatService.joinChatServer();
            return console.log('registerUser in authService success', success);
          })
          .catch((error) => {
            return console.log('registerUser in authService fail', error);
          });
      };


    }])
})();