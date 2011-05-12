//AD Service
APP.AD = (function() {
	
	var API = {};
	
	//Google Books
	//API.mBookSearchData =[];	
	//API.GOOGLEAPI.BOOKSEARCH_DATA_EVENT = "API.GOOGLEAPI.BOOKSEARCH_DATA_EVENT";
	//API.mAdImageView = Ti.UI.imageView();
	API.getAd = function( searchTerm  )
	{
		
		var xhr = Ti.Network.createHTTPClient();
		xhr.timeout = 1000000;
		xhr.open("GET","https://www.googleapis.com/books/v1/volumes?q="+searchTerm);
		
		xhr.onload = function()
		{
			try
			{
				//API.mBookSearchData = eval('('+this.responseText+')');
				//Ti.App.fireEvent(API.API.GOOGLEAPI.BOOKSEARCH_DATA_EVENT);
			}//end try
			catch(E){
				alert(E);
			}//end catch
		};//end xhr.onload
		
		// Get the data
		xhr.send();
		
	};//end getTweetsFromUser
		
	return API;
})(); //end APP.SERVICES