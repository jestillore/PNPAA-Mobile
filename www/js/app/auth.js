window.initialized = false;
app = {
  init: function(){
    document.addEventListener('deviceready', this.checkAuth, false);
  },
  checkAuth: function(){
    chrome.storage.local.get('user_id', function(obj) {
      if(obj.hasOwnProperty("user_id")){
        app.authorize()
      }else{
        $("#login-form").submit(function(e){
          e.preventDefault();
          app.authorize();
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