function countAllFromTown (regList, town) {
    let regNum = regList.split(',');
    
    var fromTown = [];
    let Count = 0;
    for (var i=0; i<regNum.length; i++) {
    let fromTown = regNum[i].trim();
      if (fromTown.startsWith(town)) {
       Count++;
      }  
    }
   return Count;
  }  
    
  console.log(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
  console.log(countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'));
  