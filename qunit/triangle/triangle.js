var triangle = {
    isEquilateral : function(a,b,c) {
    	    if(a!=b) return false ; 
    	    if(b!=c) return false ;
    	    if(a<=0) return false ;
    		return true ;
    },
    isIsosceles : function(a,b,c) {
    	    return true ;
    }
};

