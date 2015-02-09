function Main() {
  this.init();
}

Main.prototype = {
  init: function(){
    var self = this;
    kango.ui.browserButton.addEventListener(kango.ui.browserButton.event.COMMAND, function() {
      self._onCommand();
    });
  },

  getRedirector: function(url){
    var hostname = url.match(/https?:\/\/([^\/]+)/)[1];

  },

  _onCommand: function() {
    var currentTab = kango.browser.tabs.getCurrent();
    var currentUrl = currentTab.getUrl();
    var redirector = this.getRedirector(currentUrl);
    currentTab.navigate(currentUrl.replace(new Regex(redirector.regex), redirector.replace));
  }
};

var extension = new Main();