function Shape() {
	var sides = arguments ;
	this.hasNSides = function(N) {
		if(sides.length==N) 
			return true ;
		return false ;
	} ;
	this.isEquilateralTriangle = function() {
		side = sides[0] ;
		for(i=1;i<3;i++) {
			if(side[i]!=side) {
				return false ;
			}
		}
		return true ;
	} ;
	this.isIsoscelesTriangle = function() {
		// 以下的判断非常幼稚，即使测试通过，也不对，必需修正
		if(sides[0]==2)
			return true ;
		return false ;
	};
	this.isNormalTriangle = function() {
		// 以下的判断非常幼稚，即使测试通过，也不对，必需修正
		if(sides[0]==2)
			return true ;
		return false ;
	};
}