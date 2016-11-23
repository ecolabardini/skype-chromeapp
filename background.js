(function() {
  chrome.app.runtime.onLaunched.addListener(start);
  chrome.runtime.onInstalled.addListener(start);

  function start() {
    chrome.app.window.create('window.html',
      {
        'bounds': {
          'width': 800,
          'height': 680
        },
        id: 'skype'
      },
      onWindowCreated
    );
  }
  
  function onWindowCreated(appWin) {
        //nothing for now 
  }

}());
