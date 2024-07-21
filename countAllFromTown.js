function allFromTown(regNumbers, town) {
  const regNumArray = regNumbers.split(',');
  return regNumArray
      .map(regNum => regNum.trim())
      .filter(regNum => regNum.startsWith(town));
}

var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
console.log(fromStellies);

var fromCJ = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CJ');
console.log(fromCJ);

var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CF');
console.log(fromKuilsriver);