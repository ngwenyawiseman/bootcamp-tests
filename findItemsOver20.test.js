describe("findItemsOver20 function", function () {
   it("should return items with quantity over 20 from itemList", function() {
       assert.deepEqual(findItemsOver20(itemList), results);
   });

   it("should return items with quantity over 20 from itemList2", function() {
       assert.deepEqual(findItemsOver20(itemList2), results2);
   });

   it("should return an empty array for itemList3 as no items have quantity over 20", function() {
       assert.deepEqual(findItemsOver20(itemList3), results3);
   });
});