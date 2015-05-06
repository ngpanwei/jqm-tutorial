var appDb = $.localStorage ;
var appModel = {
	// using https://github.com/julien-maurel/jQuery-Storage-API
	isLoggedIn : function() {
		if(appDb.isSet("user.detail")==false) {
			return false ;
		}
		return true ;
	},	
	logOut : function() {
		appDb.remove("user.detail") ;
	},
	getUser : function() {
        userVO = appDb.get("user.detail") ;
		return userVO ;
	},
	setUser : function(userVO) {
		appDb.set("user.detail",userVO) ;
	}
} ; 
var app = {
	initialize : function() {
		$("#submitSignIn").click(function() {
			app.submitSignIn("#signInForm") ;
			return false ;
		});
		$("#submitLogOut").click(function() {
			appModel.logOut() ;
			app.start() ;
			return false ;
		});
	},
	start : function() {
		if(appModel.isLoggedIn()) {
			$("#signInForm").hide() ;
			$("#userHome").show() ;
			userVO = appModel.getUser() ;
			$("#username").text(userVO.username) ;
		} else {
			$("#signInForm").show() ;
			$("#userHome").hide() ;
		}
//		this.submitScore(5) ;
	},
	submitSignIn : function(form) {
		email = $(form).find("#email").val() ;
		password = $(form).find("#password").val() ;
		$.ajax({
			type: "POST",
			url: "http://www.storien.com/app/user/SignIn.php" ,
			dataType : "json",
			data: { 
				email : email , 
				password : password 
			},
			error: function (xhr, ajaxOptions, thrownError) {
				alert(xhr.status + "  " + thrownError);
				alert("error: "+ xhr.responseText) ;
			}
		}).done(function(result) {
			appModel.setUser(result.data) ;
			app.start() ;
		});		
		return false ;
	},	
	submitScore : function(score) {
		userVO = appModel.getUser() ;
		if(userVO==null) {
			console.log("user not defined, probably not loged in.") ;
			return ;
		}
		console.log("user: "+userVO.username+" submitting test results.") ;
		$.ajax({
			type: "POST",
			url: "http://www.storien.com/app/score/TrackScore.php" ,
			dataType : "json",
			data: { 
				user : userVO ,
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
		console.log("total",result.data.score.total,
				    "rank",result.data.rank) ;
		$("#rank").text(result.message) ;
	}
} ;
$(document).ready(function() {    
	app.initialize() ;
	app.start() ;
}) ;
