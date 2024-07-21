describe("countAllFromTown function", function () {
    it("should return all registration numbers from Stellenbosch (prefix 'CL')", function() {
        var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
        assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341']);
    });

    it("should return all registration numbers from Paarl (prefix 'CJ')", function() {
        var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CJ');
        assert.deepEqual(fromStellies, ['CJ 456']);
    });

    it("should return an empty array for Kuilsriver (prefix 'CF')", function() {
        var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CF');
        assert.deepEqual(fromKuilsriver, []);
    });
});