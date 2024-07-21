function mostProfitableDepartment(salesData) {
    let departmentSales = {};
    // Iteration!!!
    for (let sale of salesData) {
        if (departmentSales[sale.department]) {
            departmentSales[sale.department] += sale.sales;
        } else {
            departmentSales[sale.department] = sale.sales;
        }
    }

    let mostProfitable = '';
    let highestSales = 0;
    for (let department in departmentSales) {
        if (departmentSales[department] > highestSales) {
            highestSales = departmentSales[department];
            mostProfitable = department;
        }
    }

    return mostProfitable;
}

function mostProfitableDay(salesData) {
    // Create an object to store total sales for each day
    let daySales = {};
 
    for (let sale of salesData) {
        if (daySales[sale.day]) {
            daySales[sale.day] += sale.sales;
        } else {
            daySales[sale.day] = sale.sales;
        }
    }

    let mostProfitable = '';
    let highestSales = 0;
    for (let day in daySales) {
        if (daySales[day] > highestSales) {
            highestSales = daySales[day];
            mostProfitable = day;
        }
    }

    return mostProfitable;
}

var salesData = [
    {department: 'hardware', sales: 4500, day: 'Monday'},
    {department: 'outdoor', sales: 1500, day: 'Monday'},
    {department: 'carpentry', sales: 5500, day: 'Monday'},
    {department: 'hardware', sales: 7500, day: 'Tuesday'},
    {department: 'outdoor', sales: 2505, day: 'Tuesday'},
    {department: 'carpentry', sales: 1540, day: 'Tuesday'},
    {department: 'hardware', sales: 1500, day: 'Wednesday'},
    {department: 'outdoor', sales: 8507, day: 'Wednesday'},
    {department: 'carpentry', sales: 8009, day: 'Wednesday'},
    {department: 'hardware', sales: 12000, day: 'Thursday'},
    {department: 'outdoor', sales: 18007, day: 'Thursday'},
    {department: 'carpentry', sales: 6109, day: 'Thursday'},
    {department: 'hardware', sales: 7005, day: 'Friday'},
    {department: 'outdoor', sales: 12006, day: 'Friday'},
    {department: 'carpentry', sales: 16109, day: 'Friday'},
];

var salesData2 = [
    {department: 'electronics', sales: 4500, day: 'Monday'},
    {department: 'outdoor', sales: 1500, day: 'Monday'},
    {department: 'carpentry', sales: 5500, day: 'Monday'},
    {department: 'steelwork', sales: 7500, day: 'Tuesday'},
    {department: 'outdoor', sales: 2505, day: 'Tuesday'},
    {department: 'carpentry', sales: 1540, day: 'Tuesday'},
    {department: 'hardware', sales: 1500, day: 'Wednesday'},
    {department: 'outdoor', sales: 8507, day: 'Wednesday'},
    {department: 'carpentry', sales: 8009, day: 'Wednesday'},
    {department: 'hardware', sales: 12000, day: 'Thursday'},
    {department: 'carpentry', sales: 6109, day: 'Thursday'},
    {department: 'hardware', sales: 7005, day: 'Friday'},
    {department: 'electronics', sales: 12006, day: 'Friday'},
    {department: 'electronics', sales: 16109, day: 'Saturday'},
    {department: 'steelwork', sales: 7500, day: 'Tuesday'},
    {department: 'outdoor', sales: 2505, day: 'Tuesday'},
    {department: 'carpentry', sales: 1540, day: 'Tuesday'},
    {department: 'steelwork', sales: 1500, day: 'Wednesday'},
    {department: 'carpentry', sales: 8009, day: 'Wednesday'},
];

console.log(mostProfitableDepartment(salesData));
console.log(mostProfitableDepartment(salesData2));

console.log(mostProfitableDay(salesData));
console.log(mostProfitableDay(salesData2));