var calculator = {
	memory : 0 ,
	number : 0 ,
	numberPressed : function(num) {
		console.log("number pressed: "+num) ;
		this.number = this.number * 10 + num ;
		calculatorUI.setDisplay(this.number) ;
	},
	operatorPressed : function(operator) {
		console.log("operator pressed: "+operator) ;	
	},
	equalPressed : function() {
		console.log("equal pressed") ;
	},
	dotPressed : function() {
		console.log("dot pressed") ;
	},
	clearPressed : function() {
		console.log("clear pressed") ;
	},
	allClearPressed : function() {
		console.log("all clear pressed") ;
	},
};
var calculatorUI = {
    operators : [ "plus" , "minus" , "multiply" , "divide" ] ,
	initialize : function() {
		for(i=0;i<10;i++) {
			hash = "#" + i ;
			$(hash).click(function() {
				calculator.numberPressed(Number($(this).attr("id"))) ;
			});
		}
		for(i=0;i<this.operators.length;i++) {
			hash = "#" + this.operators[i] ;
			$(hash).click(function() {
				calculator.operatorPressed($(this).attr("id")) ;
			}) ;
		}
		$("#equal").click(function() {
			calculator.equalPressed() ;
		});
		$("#dot").click(function() {
			calculator.dotPressed() ;
		});
		$("#C").click(function() {
			calculator.clearPressed() ;
		});
		$("#AC").click(function() {
			calculator.allClearPressed() ;
		});
	},
	setDisplay : function() {
	    $("#display").text(calculator.number) ; 	
	},
	getDisplay : function() {
		return $("#display").text() ;
	}
};
$(document).ready(function() {
	calculatorUI.initialize() ;
});