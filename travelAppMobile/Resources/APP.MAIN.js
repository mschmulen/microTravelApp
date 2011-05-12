var APP = {};

APP = (function() {
	var MAIN = {
		
		//Micro Location App specific
		locationName: 'Nantucket', 			// Location Friendly name
		location: [ 41.248611, -70.11527 ],  	// Lat Long of the location
		radius: 333.33,				 		//Radius from Lat Long in km that contains the location
		
		
		//Platform info
		platform: 'unknown',
		osname: 'unknown',		
		isAndroid: false,
		isSimulator: false,
		platformWidth: 320,
		platformHeight: 480,
		currentLanguage: 'en',
		
		rootWindow: null,
		mainTabGroup:null,
		
		tab1:null,
		tab2:null,
		tab3:null,
		tab4:null
		
	};
	
	MAIN.init = function() {
		Ti.API.info('init here! ');
		
		//platform specs
		MAIN.platform = Ti.Platform.name;
		MAIN.osname = Ti.Platform.osname;
		MAIN.isAndroid = (Ti.Platform.osname=='android');
		MAIN.isSimulator = (Ti.Platform.model == 'Simulator' || Ti.Platform.model == 'sdk');
		MAIN.platformWidth = Ti.Platform.displayCaps.platformWidth;
		MAIN.platformHeight = Ti.Platform.displayCaps.platformHeight;
		
		MAIN.currentLanguage = Ti.Locale.currentLanguage;
		
		//facebook info
		//Titanium.Facebook.appid = "123456789";
		//Titanium.Facebook.permissions = ['publish_stream', 'read_stream'];
		
	};//end init
	
	MAIN.showTabled = function(opts)
	{
		if ( Ti.Platform.osname=='android' )		
		{
			// dashboard layout
			
		}
		else //ipad
		{
			//splitview.
			
		}
	}//end 
	
	MAIN.showMobile = function(opts)
	{
		// main window
		Titanium.UI.setBackgroundColor('#000');
		
		// create tab group
		APP.mainTabGroup = Titanium.UI.createTabGroup();
		
		var win1 = APP.UI.createWindowHome({});
		APP.tab1 = Titanium.UI.createTab({ icon:'KS_nav_ui.png',title:'Home', window:win1 });
		
		//var win2 = APP.UI.createWindowMap({});
		var win2 = APP.UI.createFullMapWindow({});
		APP.tab2 = Titanium.UI.createTab({ icon:'KS_nav_ui.png',title:'Maps', window:win2 });
		
		var win3 = APP.UI.createWindowSocial({});
		APP.tab3 = Titanium.UI.createTab({ icon:'KS_nav_ui.png', title:'Social', window:win3 });
		
		var win4 = APP.UI.createWindowHistory({});
		APP.tab4 = Titanium.UI.createTab({ icon:'KS_nav_ui.png', title:'History', window:win4 });
		
		//  add tabs
		APP.mainTabGroup.addTab( APP.tab1 );
		APP.mainTabGroup.addTab( APP.tab2 );
		APP.mainTabGroup.addTab( APP.tab3 );
		APP.mainTabGroup.addTab( APP.tab4 );
		
		// open tab group
		APP.mainTabGroup.open();
	}; //end showMobile
	
	return MAIN;
})();