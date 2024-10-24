// Import 'chai' dynamically using import()
(async () => {
    const chai = await import('chai');
    const expect = chai.expect;
  
    // Sample function to test
    const add = (a, b) => a + b;
  
    // Describe block for test cases
    describe('Math Functions', function () {
      it('should return the sum of two numbers', function () {
        expect(add(2, 3)).to.equal(5);
      });
  
      it('should return a number', function () {
        expect(add(2, 3)).to.be.a('number');
      });
    });
  })();
  