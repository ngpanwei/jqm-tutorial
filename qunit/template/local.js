var app = {
	initialize : function() {
	},
	start : function() {
		this.submitScore(5) ;
	},
	submitScore : function(score) {
		$.ajax({
			type: "POST",
			url: "http://www.storien.com/app/score/TrackScore.php" ,
			dataType : "json",
			data: { 
				score : score ,
			} ,
			error: function (xhr, ajaxOptions, thrownError) {
				alert(xhr.status + "  " + thrownError);
				alert("error: "+ xhr.responseText) ;
			}
		}).done(function(result) {
			app.afterSubmit(result);
		});		
		return false ;
	},
	afterSubmit : function(result) {
		console.log(result.data) ;
	}
} ;
$(document).ready(function() {    
	app.initialize() ;
	app.start() ;
}) ;
