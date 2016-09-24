angular.module('LoopIn.user')

  .service('UserService', function( $localStorage, $http, domain, api) {
    $localStorage = $localStorage.$default({
      user: {}
    });

    return {
      login: function(uname, pw){
        $localStorage.user.username = uname;
        console.log(domain + api.login)
        return $http.post(domain + api.login, {
            username: uname,
            password: pw,
            device_token: $localStorage.loopin_device_token
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

      registerUser: function(uname, pw, email){
        $localStorage.user.username = uname;
        console.log(domain + api.register)
        return $http.post(domain + api.register, {
            username: uname,
            password: pw,
            email: email,
            device_token: $localStorage.loopin_device_token
        })
          .success(function(data, status, headers, config){
            console.log('USER register Successfully');
            // token saved to local storage in controller
            return data;
          })
          .error(function(data, status, headers, config){
            console.log('USER register failed');
            return data;
          })

      },

      logout: function(){
        $http.defaults.headers.common['x-access-token'] = $localStorage.user.token;

        return $http.put(domain + api.logout, {
            device_token: $localStorage.loopin_device_token
        })
          .success(function(data, status, headers, config){
            console.log('USER logout Successfully');
            // token saved to local storage in controller
            return data;
          })
          .error(function(data, status, headers, config){
            console.log('USER logout failed');
            return data;
          })
      },

      getUserInfo: function(){
        return $http.get(domain + api.me, {})
          .success(function(data, status, headers, config){
            return data;
          })
          .error(function(data, status, headers, config){
            return data;
          })

      },

      forgetPassword: function(email){
        return $http.post(domain + api.forgetPassword, {
          email: email
        })
          .success(function(data, status, headers, config){
            console.log(JSON.stringify(data))
            return data;
          })
          .error(function(data, status, headers, config){
            console.log(JSON.stringify(data))
            return data;
          })
      },


      resetPassword: function(resetToken, npwd){
        return $http.post(domain + api.resetPassword + resetToken, {
          password: npwd
        })
          .success(function(data, status, headers, config){
            console.log(JSON.stringify(data))
            return data;
          })
          .error(function(data, status, headers, config){
            console.log(JSON.stringify(data))
            return data;
          })
      }





    }

  })
