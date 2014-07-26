var app;

app = {
  init: function(){
    document.addEventListener('deviceready', this.checkAuth, false);
  },
  checkAuth: function(){
    database.prepare();
    database.getUser(function(result){
      if(result.success){
        $("#cover").remove();
        window.user = result.user
        app.authorize()
      }
      else{
        $("#cover").remove();
        $("#login-form").submit(function(e){
          e.preventDefault();
          $('#login-btn').attr('disabled', 'disabled').html('Logging in...');
          $.post("http://pnpaa.herokuapp.com/users/sign_in", $(this).serialize())
          .done(function(res){
            if(res.success){
              database.saveUser(res.user, function(){
                app.authorize();
              })
            }
            else{
              alert("Login failed.")
            }
          })
          .fail(function(){
            alert('Please check your network connectivity.')
          })
          .always(function(){
            $('#login-btn').html('Login <span class="fa fa-chevron-right"></span>').removeAttr('disabled');
          })
        });
      }
    })
  },
  authorize: function(){
    $("#app").html('');
    angular.bootstrap(document, ['PNPAA']);
  }
}

app.init();