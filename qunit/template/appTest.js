QUnit.test("Test-A", function( assert ) {
	assert.equal(true,true,"equal") ;
});
QUnit.test("Test-B", function( assert ) {
	assert.equal(false,false,"equal") ;
	assert.equal(false,true,"equal") ;
});
QUnit.test("Test-C", function( assert ) {
	assert.equal(false,false,"equal") ;
	assert.equal(false,true,"equal") ;
});