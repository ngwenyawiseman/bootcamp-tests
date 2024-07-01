describe("testing is findltemsOver function", function(){
    it("it should takes a list of objects each with a name and qty attribute and return products that have quantity higher than the threshold", function(){
        assert.deepEqual(results3, findItemsOver(itemList3, 20));
    });
   
   });