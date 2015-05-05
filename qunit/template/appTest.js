QUnit.test("equilateral have three equal sides", function( assert ) {
	assert.equal(triangle.isEquilateral(2,2,2),true,"2,2,2 is equilateral") ;
	assert.equal(triangle.isEquilateral(0,0,0),true,"0,0,0 is not equilateral") ;
	assert.equal(triangle.isEquilateral(-1,-1,-1),true,"-1,-1,-1 is not equilateral") ;
});