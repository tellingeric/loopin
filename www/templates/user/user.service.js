angular.module('LoopIn.user')

  .service('UserService', function( $localStorage, $http, domain, api) {
    $localStorage = $localStorage.$default({
      user: {}
    });

    return {
      login: function(uname, pw){
        $localStorage.user.username = uname;

        return $http.post(domain + api.login, {
            username: uname,
            password: pw
        })
          .success(function(data, status, headers, config){
            console.log('USER log in Successfully');
            // token saved to local storage in controller
            return data;
          })
          .error(function(data, status, headers, config){
            console.log('USER log in failed');
            return data;
          })

      },

      logout: function(){
        return '';
      }



    }

  })
