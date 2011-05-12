APP.SERVICES.GOOGLEAPI = (function() {
	
	var API = {};
	
	//Google Books
	API.mBookSearchData =[];
	API.GOOGLEAPI.BOOKSEARCH_DATA_EVENT = "API.GOOGLEAPI.BOOKSEARCH_DATA_EVENT";
	API.bookSearch = function( searchTerm  )
	{
		var xhr = Ti.Network.createHTTPClient();
		xhr.timeout = 1000000;
		xhr.open("GET","https://www.googleapis.com/books/v1/volumes?q="+searchTerm);
		
		xhr.onload = function()
		{
			try
			{
				API.mBookSearchData = eval('('+this.responseText+')');
				Ti.App.fireEvent(API.API.GOOGLEAPI.BOOKSEARCH_DATA_EVENT);
			}//end try
			catch(E){
				alert(E);
			}//end catch
		};//end xhr.onload
		
		// Get the data
		xhr.send();
	};//end getTweetsFromUser
	
	/*
	API.mTwitterSearchData = [];
	TWITTER_GET_SEARCH_DATA_EVENT = "APP.SERVICES.TWITTER_GET_SEARCH_DATA_EVENT";
	API.getTtwitterSearch = function( searchTerm )
	{
		
		var xhr = Ti.Network.createHTTPClient();
		xhr.timeout = 1000000;
		xhr.open("GET","http://search.twitter.com/search.json?lang=en&q="+searchTerm);
		
				
		xhr.onload = function()
		{
			try
			{
				var mTwitterSearchData = eval('('+this.responseText+')');
				
			}
			catch(E){
				alert(E);
			}
		};
		// Get the data
		xhr.send();
	};//end searchTweets
	
	API.mTwitterGetNearbyLocationsData = [];
	TWITTER_GET_BY_LOCATION_DATA_EVENT = "APP.SERVICES.TWITTER_GET_BY_LOCATION_DATA_EVENT";
	API.getTwitterByLocation = function( lat, lon  )
	{
		// create table view data object
		var data = [];
		var radiusKM = 25;
		var xhr = Ti.Network.createHTTPClient();
		xhr.timeout = 1000000;
		//xhr.open("GET","http://api.twitter.com/1/geo/reverse_geocode.json?" + "lat=" +lat + "&long=" + lon );
		xhr.open("GET","http://search.twitter.com/search.json?" + "geocode=" +lat + "%2C" + lon+ "%2C" + radiusKM + "km" );
		Ti.API.info( "http://search.twitter.com/search.json?" + "geocode=" +lat + "%2C" + lon+ "%2C" + radiusKM + "km" );
		
		xhr.onload = function()
		{
			try
			{
				API.mTwitterGetNearbyLocationsData = eval('('+this.responseText+')');
			
				Ti.App.fireEvent(API.TWITTER_GET_BY_LOCATION_DATA_EVENT);
			}//end try
			catch(E){
				alert(E);
			}//end catch
		};
		
		// Get the data
		xhr.send();
	};//end twitterGetNearbyLocations
	*/
	
	return API;
})(); //end APP.SERVICES