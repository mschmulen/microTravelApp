APP.MODEL = (function() {
	
	var mDataHistory = [
		{title:'Paleolithic history of nantucket', hasChild:true, urlRef:'assets/template.html' },
		{title:'Early colonization', hasChild:true, urlRef:'assets/earlyCol.html' },
		{title:'Whaling industry', hasChild:true, urlRef:'assets/whaling.html' },
		{title:'Essex', hasChild:true, urlRef:'assets/essex.html' },
		{title:'Scrim Shaw', hasChild:true, urlRef:'assets/scrim.html' },
		//{title:'Notable residants', hasChild:true, urlRef:'r.html' },
		{title:'Intersting facts', hasChild:true, urlRef:'assets/facts.html' }, // http://www.nantucketchamber.org/visitor/trivia.html  http://www.nantucket.net/links/facts.php 
		{title:'The Man from Nantucket', hasChild:true, urlRef:'assets/manfrom.html'},	//http://en.wikipedia.org/wiki/There_once_was_a_man_from_Nantucket
		{title:'Nantucket Ship building', hasChild:true, urlRef:'assets/shipBuilding.html' } //http://en.wikipedia.org/wiki/Nantucket_shipbuilding
	];//end mDataHistory
	
	/*
		//Nantucketer's
		
	 	http://en.wikipedia.org/wiki/Brant_Point_Light
		http://en.wikipedia.org/wiki/Jethro_Coffin_House
		http://en.wikipedia.org/wiki/Great_Point_Light
		http://en.wikipedia.org/wiki/Sankaty_Head_Light
	*/
	var mHistoryMapAnnotationData = [
		{
			title:"Brant Point Lighthouse",
			subtitle:'Brant Point Lighthouse',
			latitude:41.28992, 
			longitude:-70.090285
		},
		{
			title:"Jethro Coffin House",
			subtitle:'Jethro Coffin House',
			latitude:41.2875,
			longitude:-70.106944
		},
		{
			title:"Great Point Lighthouse",
			subtitle:'Great Point Lighthouse',
			latitude:41.390167, 
			longitude:-70.048278
		},
		{
			title:"Sankaty Head Light",
			subtitle:'Sankaty Head Light',
			latitude:41.283611, 
			longitude:-69.965194
		},
		{
			title:"Old North Cemetery",
			subtitle:'Old North Cemetery',
			latitude:41.283611, 
			longitude:-69.965194
		}	
	];//end mHistoryMapAnnotationData
	
	//Maria Mitchell Observatory 
			//http://maps.google.com/local_url?q=http://www.mmo.org/&dq=The+Nantucket+Maria+Mitchell+Association+Admin+Offices&cid=17672622842398114180&hl=en&ved=0CD4Q5AQ&sa=X&ei=bYvITYGKJarAyQX_u7SrBw&s=ANYYN7nkLlJcnB2LjT2vjEa1-EVfPo4kKw
			//http://www.mmo.org/
			
			
	//Polpis Burying Ground
	//Old Settlers Graves 
	//Prospect Hill Cemetery
	
	
	
	var mCommercialMapAnnotationData = [
		{
			title:"Sankaty Head Light",
			subtitle:'Sankaty Head Light',
			latitude:41.283611, 
			longitude:-69.965194
		},
		{
			title:"Old North Cemetery",
			subtitle:'Old North Cemetery',
			latitude:41.283611, 
			longitude:-69.965194
		}
	];//end mHistoryMapAnnotationData
		
	//ciscobrewers.com
	//milliesnantucket.com
	
	var mDataTwitterSearchTerms = [ 'nantucket', 'capecod' ];
	
	var MODEL = {
		dataHistory : mDataHistory,
		CommercialMapAnnotationData : mCommercialMapAnnotationData,
		HistoryMapAnnotationData : mHistoryMapAnnotationData,
		dataTwitterSearchTerms : mDataTwitterSearchTerms
	};
	
	return MODEL;
	
})();//end APP.MODEL
