APP.UI = (function() {
	
	//Local variables
	//var backgroundImage = 'assets/images/background/background1.png';
	
	var API = { };
	
	API.createViralBar = function()
	{
		//create a viral bar for email, twitter, facebook, email etc.
		var returnView = Ti.UI.createView({ backgroundColor:'#EBEBEB', top:0, left:0, height:80, width:320 });
		
		//twitter
		var twitterButton = Titanium.UI.createButton({ color:'#343434', width:64, height:64, left:10, top:10 });
		returnView.add(twitterButton);
		
		twitterButton.addEventListener("click",function(e) {
			var win = Ti.UI.createWindow({title:'Twitter'});
			
			var close = Titanium.UI.createButton({
				title:'Close'
			});
			close.addEventListener('click', function()
			{
				win.close();
			});
			if (APP.osname == 'iphone' || APP.osnam == 'ipad') {
				win.setRightNavButton(close);
			}//end if
			
			win.open({modal:true});
		});
		
		//facebook
		var facebookButton = Titanium.UI.createButton({ backgroundColor: Titanium.Facebook.loggedIn ? 'green' : 'red', width:64, height:64, right:10, top:10 });
		returnView.add(facebookButton);
		facebookButton.addEventListener("click",function(e) {
			var win = Ti.UI.createWindow({title:'Facebook'});
			
			var close = Titanium.UI.createButton({
				title:'Close'
			});
			close.addEventListener('click', function()
			{
				win.close();
			});
			if (Ti.Platform.osname == 'iphone' || Ti.Platform.osname == 'ipad') {
				win.setRightNavButton(close);
			}
			
			win.open({modal:true});
		}); //end facebookButton click
		
		//foursquare
		var foursquareButton = Titanium.UI.createButton({ /*image:'../images/icons/iconFacebook.png',*/ width:64, height:64, top:10 });
		returnView.add(foursquareButton);
		foursquareButton.addEventListener("click",function(e) {
			var win = Ti.UI.createWindow({title:'FourSquare'});
			
			var close = Titanium.UI.createButton({
				title:'Close'
			});
			close.addEventListener('click', function()
			{
				win.close();
			});
			if (Ti.Platform.osname == 'iphone' || Ti.Platform.osname == 'ipad') {
				win.setRightNavButton(close);
			}
			
			win.open({modal:true});
		});//end foursquareButton click
		
		return returnView;
	};//end createViralBar
		
	API.createWindowHome = function( options )
	{
		//Ti.API.info( 'options:' +  options );
		
		var win = Titanium.UI.createWindow({ title:'Home',   backgroundColor:'#fff' });
		
		//add the viral bar to the top
		win.add( API.createViralBar() );
		
		var label1 = Titanium.UI.createLabel({ color:'#999', text: APP.locationName, font:{fontSize:20,fontFamily:'Helvetica Neue'}, top:90, textAlign:'center', width:'auto' });
		win.add(label1);
		
		return win;
	};//end createWindowHome
	
	API.createFullMapWindow = function( options )
	{
		var win = Titanium.UI.createWindow({ title:'Map',   backgroundColor:'#fff' });
		
		var mapAnnotations = [];
		
		//add the historic annotations
		for (var c=0;c<APP.MODEL.HistoryMapAnnotationData.length;c++){
			mapAnnotations[mapAnnotations.length] = Titanium.Map.createAnnotation({
				latitude:APP.MODEL.HistoryMapAnnotationData[c].latitude,
				longitude:APP.MODEL.HistoryMapAnnotationData[c].longitude,
				title:APP.MODEL.HistoryMapAnnotationData[c].title,
				subtitle:APP.MODEL.HistoryMapAnnotationData[c].subtitle,
				pincolor:Titanium.Map.ANNOTATION_GREEN,
				animate:true
			});
		}//end for HistoryMapAnnotationData
		
		//add the commercial annotations
		for (var k=0;k<APP.MODEL.CommercialMapAnnotationData.length;k++){
			mapAnnotations[mapAnnotations.length] = Titanium.Map.createAnnotation({
				latitude:APP.MODEL.CommercialMapAnnotationData[k].latitude + 0.001,
				longitude:APP.MODEL.CommercialMapAnnotationData[k].longitude + 0.001,
				title:APP.MODEL.CommercialMapAnnotationData[k].title,
				subtitle:APP.MODEL.CommercialMapAnnotationData[k].subtitle,
				pincolor:Titanium.Map.ANNOTATION_RED,
				animate:true
			});
		}//end for CommercialMapAnnotationData
		
		//map View
		var mapview = Titanium.Map.createView({
			mapType: Titanium.Map.STANDARD_TYPE,
			region:{latitude:APP.location[0], longitude:APP.location[1], latitudeDelta:0.04, longitudeDelta:0.04},
			animate:true,
			regionFit:true,
			userLocation:true,
			annotations:mapAnnotations
		});
		win.add(mapview);
		
		return win;
	};
	
	API.createWindowMap = function( options )
	{
		var win = Titanium.UI.createWindow({ title:'Map',   backgroundColor:'#fff' });
		
		//map View
		var mapview = Titanium.Map.createView({
			mapType: Titanium.Map.STANDARD_TYPE,
			region:{latitude:33.74511, longitude:-84.38993, latitudeDelta:0.5, longitudeDelta:0.5},
			animate:true,
			regionFit:true,
			userLocation:true,
			top:0,
			left:0,
			height:150,
			width:150
		});
		win.add(mapview);
		
		// region change event listener
		mapview.addEventListener('regionChanged',function(evt)
		{
			Titanium.API.info('maps region has updated to '+evt.longitude+','+evt.latitude);
			APP.SERVICES.getTwitterByLocation( evt.latitude , evt.longitude );
		});//end regionChanged
		
		//TableView
		var tvData = [];
		var tv = Titanium.UI.createTableView({data:tvData, minRowHeight:58, top:150, height:210});
		win.add(tv);
		
		//add event listener
		Ti.App.addEventListener(APP.SERVICES.TWITTER_GET_BY_LOCATION_DATA_EVENT, function()
		{
			Ti.API.info( 'yack yack');
			for (var c=0;c<APP.SERVICES.mTwitterGetNearbyLocationsData.results.length;c++){
				Ti.API.info( 'mTwitterGetNearbyLocationsData [' + c + ']' );
				Ti.API.info( 'location :' + APP.SERVICES.mTwitterGetNearbyLocationsData.results[c].location );
				Ti.API.info( 'text :' + APP.SERVICES.mTwitterGetNearbyLocationsData.results[c].text );
				Ti.API.info( 'profile_image_url :' + APP.SERVICES.mTwitterGetNearbyLocationsData.results[c].profile_image_url );
				Ti.API.info( 'from_user :' + APP.SERVICES.mTwitterGetNearbyLocationsData.results[c].from_user );
				Ti.API.info( 'from_user_id :' + APP.SERVICES.mTwitterGetNearbyLocationsData.results[c].from_user_id );
				
				var tweet = APP.SERVICES.mTwitterGetNearbyLocationsData.results[c].text;
				var user = APP.SERVICES.mTwitterGetNearbyLocationsData.results[c].from_user;
				var avatar = APP.SERVICES.mTwitterGetNearbyLocationsData.results[c].profile_image_url;
				var bgcolor = (c % 2) == 0 ? '#fff' : '#eee';
				
				var row = Ti.UI.createTableViewRow({hasChild:true,height:'auto',backgroundColor:bgcolor});

				var post_view = Ti.UI.createView({ height:'auto',	layout:'vertical',left:5,top:5,bottom:5,right:5 });

				var av = Ti.UI.createImageView({image:avatar,left:0,top:0,height:48,width:48 });
				post_view.add(av);

				var user_label = Ti.UI.createLabel({ text:user,left:54,width:120,top:-48,bottom:2,height:16,textAlign:'left',color:'#444444',font:{fontFamily:'Trebuchet MS',fontSize:14,fontWeight:'bold'} });
				post_view.add(user_label);

				var tweet_text = Ti.UI.createLabel({ text:tweet,left:54,top:0,bottom:2,height:'auto',width:236,textAlign:'left',font:{fontSize:14} });
				post_view.add(tweet_text);

				row.add(post_view);
				row.className = 'item'+c;
				tvData[c] = row;
				
			}//end for
			
			tv.setData( tvData );
			
		});
		
		return win;
	};//end createWindowMap
	
	API.createWindowSocial = function( options )
	{
		
		var win = Titanium.UI.createWindow({ title:'Social',   backgroundColor:'#fff' });
		var tvData = [];
		var tv = Titanium.UI.createTableView({data:tvData, minRowHeight:58});
		win.add(tv);
		
		win.addEventListener('focus',function(e)
		{
			//APP.SERVICES.getTweetsFromUser( 'appcelerator' );
			APP.SERVICES.getTwitterByLocation( 41.248611, -70.11527 );
		});
		
		//add event listener
		Ti.App.addEventListener(APP.SERVICES.TWITTER_TWEET_DATA_EVENT, function()
		{
			tvData = [];
			
			for (var c=0;c<APP.SERVICES.mTweetData.length;c++){

				var tweet = APP.SERVICES.mTweetData[c].text;
				var user = APP.SERVICES.mTweetData[c].user.screen_name;
				var avatar = APP.SERVICES.mTweetData[c].user.profile_image_url;
				var bgcolor = (c % 2) == 0 ? '#fff' : '#eee';

				var row = Ti.UI.createTableViewRow({hasChild:true,height:'auto',backgroundColor:bgcolor});

				var post_view = Ti.UI.createView({ height:'auto',	layout:'vertical',left:5,top:5,bottom:5,right:5 });

				var av = Ti.UI.createImageView({image:avatar,left:0,top:0,height:48,width:48 });
				post_view.add(av);

				var user_label = Ti.UI.createLabel({ text:user,left:54,width:120,top:-48,bottom:2,height:16,textAlign:'left',color:'#444444',font:{fontFamily:'Trebuchet MS',fontSize:14,fontWeight:'bold'} });
				post_view.add(user_label);

				var tweet_text = Ti.UI.createLabel({ text:tweet,left:54,top:0,bottom:2,height:'auto',width:236,textAlign:'left',font:{fontSize:14} });
				post_view.add(tweet_text);

				row.add(post_view);
				row.className = 'item'+c;
				tvData[c] = row;
			}//end for
			
			tv.setData( tvData );
		});
		
			Ti.App.addEventListener(APP.SERVICES.TWITTER_GET_BY_LOCATION_DATA_EVENT, function()
			{
					for (var c=0;c<APP.SERVICES.mTwitterGetNearbyLocationsData.results.length;c++){
						Ti.API.info( 'mTwitterGetNearbyLocationsData [' + c + ']' );
						Ti.API.info( 'location :' + APP.SERVICES.mTwitterGetNearbyLocationsData.results[c].location );
						Ti.API.info( 'text :' + APP.SERVICES.mTwitterGetNearbyLocationsData.results[c].text );
						Ti.API.info( 'profile_image_url :' + APP.SERVICES.mTwitterGetNearbyLocationsData.results[c].profile_image_url );
						Ti.API.info( 'from_user :' + APP.SERVICES.mTwitterGetNearbyLocationsData.results[c].from_user );
						Ti.API.info( 'from_user_id :' + APP.SERVICES.mTwitterGetNearbyLocationsData.results[c].from_user_id );

						var tweet = APP.SERVICES.mTwitterGetNearbyLocationsData.results[c].text;
						var user = APP.SERVICES.mTwitterGetNearbyLocationsData.results[c].from_user;
						var avatar = APP.SERVICES.mTwitterGetNearbyLocationsData.results[c].profile_image_url;
						var bgcolor = (c % 2) == 0 ? '#fff' : '#eee';

						var row = Ti.UI.createTableViewRow({hasChild:true,height:'auto',backgroundColor:bgcolor});

						var post_view = Ti.UI.createView({ height:'auto',	layout:'vertical',left:5,top:5,bottom:5,right:5 });

						var av = Ti.UI.createImageView({image:avatar,left:0,top:0,height:48,width:48 });
						post_view.add(av);

						var user_label = Ti.UI.createLabel({ text:user,left:54,width:120,top:-48,bottom:2,height:16,textAlign:'left',color:'#444444',font:{fontFamily:'Trebuchet MS',fontSize:14,fontWeight:'bold'} });
						post_view.add(user_label);

						var tweet_text = Ti.UI.createLabel({ text:tweet,left:54,top:0,bottom:2,height:'auto',width:236,textAlign:'left',font:{fontSize:14} });
						post_view.add(tweet_text);

						row.add(post_view);
						row.className = 'item'+c;
						tvData[c] = row;

					}//end for

					tv.setData( tvData );
			});
		
		return win;
	};//end createWindowSocial
		
	API.historyTableViewClick = function ( e )
	{
		var webview = Ti.UI.createWebView();
		webview.url = e.rowData.urlRef;
		
		var detailWin = Titanium.UI.createWindow({ title:e.rowData.title });
		
		detailWin.add(webview);
		
		APP.tab4.open(detailWin,{animated:true});
	};//end historyTableViewClick
	
	API.createWindowHistory = function( options )
	{
		Ti.API.info( 'options:' +  options );
		
		var win = Titanium.UI.createWindow({ title:'Home',   backgroundColor:'#fff' });
		
		// create table view
		var tableview = Titanium.UI.createTableView({
			data:APP.MODEL.dataHistory
		});
		
		// create table view event listener
		tableview.addEventListener('click', API.historyTableViewClick );//end addEventListener
		
		// add table view to the window
		win.add(tableview);
		
		return win;
	};//end createWindowHistory	
	
	return API;
})();