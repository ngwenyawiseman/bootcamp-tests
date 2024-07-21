function totalPhoneBill(data) {
  const callCost = 2.75;
  const smsCost = 0.65;
  
  // I am splitting the input string into an array of calls and SMSs
  const items = data.split(', ');
  
  // Counting the calls and smss recieved
  const numCalls = items.filter(item => item === 'call').length;
  const numSMSs = items.filter(item => item === 'sms').length;
  
  // Here I am calculating the total cost!!!
  const totalCost = (numCalls * callCost) + (numSMSs * smsCost);
  
  // Format the total bill as a string with the currency symbol
  return 'R' + totalCost.toFixed(2);
}

// assert or console.log???!
assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
assert.equal('R3.40', totalPhoneBill('call, sms'));
assert.equal('R1.30', totalPhoneBill('sms, sms'));