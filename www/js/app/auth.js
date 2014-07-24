var app;

app = {
  init: function(){
    document.addEventListener('deviceready', this.checkAuth, false);
  },
  checkAuth: function(){
    $("#login-form").submit(function(e){
      e.preventDefault();
      $('#login-btn').attr('disabled', 'disabled').html('Logging in...');
      $.post("http://pnpaa.herokuapp.com/users/sign_in", $(this).serialize())
      .done(function(res){
        if(res.success){
          window.user = res.user;
          app.authorize();
        }
        else{
          alert("Login failed! Please try again.")
        }
      })
      .fail(function(){
        alert('Please check your network connectivity.')
      })
      .always(function(){
        $('#login-btn').html('Login').removeAttr('disabled');
      })
    });
  },
  authorize: function(){
    $("#app").html('');
    angular.bootstrap(document, ['PNPAA']);
  }
}

app.init();