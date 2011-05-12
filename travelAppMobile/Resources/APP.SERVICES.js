APP.SERVICES = (function() {
	
	var API = {};
	
	//TWITTER
	API.mTweetData =[];
	API.TWITTER_TWEET_DATA_EVENT = "APP.SERVICES.TWITTER_TWEET_DATA_EVENT";
	API.getTweetsFromUser = function( screenName  )
	{
		var xhr = Ti.Network.createHTTPClient();
		xhr.timeout = 1000000;
		xhr.open("GET","http://api.twitter.com/1/statuses/user_timeline.json?screen_name="+screenName);
		
		xhr.onload = function()
		{
			try
			{
				API.mTweetData = eval('('+this.responseText+')');
				Ti.App.fireEvent(API.TWITTER_TWEET_DATA_EVENT);
			}//end try
			catch(E){
				alert(E);
			}//end catch
		};//end xhr.onload
		
		// Get the data
		xhr.send();
	};//end getTweetsFromUser
	
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
				/*
				for (var c=0;c<mTwitterSearchData.results.length;c++){
					Ti.API.info( 'mTwitterSearchData[' +  c );
				}//end for twitterResponse
				*/
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
				/*
				for (var c=0;c<API.mTwitterGetNearbyLocationsData.results.length;c++){
					Ti.API.info( 'mTwitterGetNearbyLocationsData[' +  c );
				}//end for twitterResponse
				*/
				Ti.App.fireEvent(API.TWITTER_GET_BY_LOCATION_DATA_EVENT);
			}//end try
			catch(E){
				alert(E);
			}//end catch
		};
		
		// Get the data
		xhr.send();
	};//end twitterGetNearbyLocations
	
	//FOURSQUARE
	
	//FACEBOOK
	
	return API;
})(); //end APP.SERVICES