describe("testing is findltemsOver20 function", function(){
    it("it should use the list objects and it attributes and return all the products that have a quantity higher than 20", function(){
       assert.deepEqual(results, findItemsOver20(itemList));
       [{"name":"pears","qty":37},{"name":"bananas","qty":27}]
       [{"name":"apples","qty":40},{"name":"bananas","qty":23},{"name":"apples","qty":37}]
    });
   
   });