describe("testing my function mostProfitableDepartment", function(){
    it("it should take the objects and its attribute, the if condition and return the most profitable department", function(){
       assert.equal('outdoor', mostProfitableDepartment(salesData), "Most profitable department is 'outdoor' for dataset 1");
       assert.equal('electronics', mostProfitableDepartment(salesData2), "Most profitable department is 'electronics' for dataset 2");
 
    });
 })
 
 describe("testing my function called mostProfitableDay", function(){
    it("it should use the object and its attribute to return the most highest sale day", function(){
       assert.equal('Thursday', mostProfitableDay(salesData), "Most profitable day is 'Thursday' for dataset 1");
       assert.equal('Wednesday', mostProfitableDay(salesData2), "Most profitable day is 'Wednesday' for dataset 2");
       
 });
 
 });