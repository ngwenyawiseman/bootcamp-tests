function countAllPaarl(registrationNumbers) {
    const regNums = registrationNumbers.split(", ");
    let count = 0;
    for (let i = 0; i < regNums.length; i++) {
    if (regNums[i].startsWith("CJ")) {
      count++;
     }
    }
     return count;
  }
  console.log(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
   