var GEOCALC = {
	
	//using GeoCalc to calcuate the distance between 2 lat long points in Miles & Km
	// d = GeoCalc.CalcDistance(47.8131545175277, -122.783203125, 42.0982224111897, -87.890625, GeoCalc.mEarthRadiusInMiles);
  	// d = GeoCodeCalc.CalcDistance(47.8131545175277, -122.783203125, 42.0982224111897, -87.890625, GeoCalc.mEarthRadiusInKilometers);
	
	mEarthRadiusInMiles: 3956.0,
  	mEarthRadiusInKilometers: 6367.0,
	
  	ToRadian: function(v) {
      	return v * (Math.PI / 180);
  	}, //end ToRadian
	
  	DiffRadian: function(v1, v2) {
		return GeoCodeCalc.ToRadian(v2) - GeoCodeCalc.ToRadian(v1);
  	}, //end DiffRadian
	
  	CalcDistance: function(lat1, lng1, lat2, lng2, radius) {
      	return radius * 2 * Math.asin(Math.min(1, Math.sqrt((Math.pow(Math.sin((GeoCodeCalc.DiffRadian(lat1, lat2)) / 2.0), 2.0) + Math.cos(GeoCodeCalc.ToRadian(lat1)) * Math.cos(GeoCodeCalc.ToRadian(lat2)) * Math.pow(Math.sin((GeoCodeCalc.DiffRadian(lng1, lng2)) / 2.0), 2.0)))));
  	}//end CalcDistance
	
};//end GeoCalc
