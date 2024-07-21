function fromWhere(registrationNumber) {
  if (registrationNumber.startsWith('CY')) {
      return 'Bellville';
  } else if (registrationNumber.startsWith('CJ')) {
      return 'Paarl';
  } else if (registrationNumber.startsWith('CA')) {
      return 'Cape Town';
  } else {
      return 'Some other place!';
  }
} 

// is this the part where it gets messy?
assert.equal(fromWhere('CY 567489'), 'Bellville');
assert.equal(fromWhere('CJ 343502'), 'Paarl');
assert.equal(fromWhere('CA 987504'), 'Cape Town');
assert.equal(fromWhere('ZN 568593'), 'Some other place!');