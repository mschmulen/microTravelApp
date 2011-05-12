APP.ANALYTICS = (function() {
	
	var API = {};
	
	//Google Books
	API.mAnalyticsURL = 'http:/myhost.com/analytics.asp?gaq=' + 'UA-NNNNNNN-NN';
	API.bookSearch = function( )
	{
		var analyticsWebView = Ti.UI.createWebView({width: 500, height: 300, top: 0, left: 0,backgroundColor: 'white', url: mAnalyticsURL});
		//In this case, mainWindow is open but never actually visible
		//mainWindow.add(analyticsWebView);
	};//end getTweetsFromUser
	
	return API;
})(); //end APP.ANALYTICS