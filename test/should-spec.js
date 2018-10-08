var should = require('chai').should();
var numbers = [1, 2, 3, 4, 5];

describe('should', function() {

  it('should should', function() {
    numbers.should.be.an('array').that.includes(2);
    numbers.should.have.lengthOf(5);
  })
  
})
