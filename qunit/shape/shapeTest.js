QUnit.test("有几边", function( assert ) {
	assert.equal(true,new Shape(2,2,3).hasNSides(3),"三角形") ;
	assert.equal(true,new Shape(1,2,3).hasNSides(3),"三角形") ;
	assert.equal(true,new Shape(1,2,3,4).hasNSides(4),"四角形") ;
});

QUnit.test("等边三角形", function( assert ) {
	assert.equal(true,new Shape(1,1,1).isEquilateralTriangle(),"等边三角型") ;
});

QUnit.test("等腰三角形", function( assert ) {
	assert.equal(true,new Shape(1,2,1).isIsoscelesTriangle(),"等腰三角形") ;
	assert.equal(true,new Shape(2,1,1).isIsoscelesTriangle(),"等腰三角形") ;
	assert.equal(true,new Shape(1,1,2).isIsoscelesTriangle(),"等腰三角形") ;
});

QUnit.test("普通三角形", function( assert ) {
	assert.equal(true,new Shape(2,4,3).isNormalTriangle(),"等腰三角形") ;
	assert.equal(true,new Shape(4,3,2).isNormalTriangle(),"等腰三角形") ;
	assert.equal(true,new Shape(3,4,2).isNormalTriangle(),"等腰三角形") ;
});