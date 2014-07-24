var app;

app = {
  init: function(){
    document.addEventListener('deviceready', this.checkAuth, false);
  },
  checkAuth: function(){
    $("#login-form").submit(function(e){
      e.preventDefault();
      $('#login-btn').attr('disabled', 'disabled').html('Logging in...');
      $.post("http://pnpaa.herokuapp.com/users/sign_in", $(this).serialize(), function(res){
        if(res.success){
          window.user = res;
          app.authorize();
        }
        else{
          alert("Login failed! Please try again.")
        }
        $('#login-btn').html('Login').removeAttr('disabled');
      }).fail()
    });
  },
  authorize: function(){
    $("#app").html('');
    angular.bootstrap(document, ['PNPAA']);
  }
}

app.init();