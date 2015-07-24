Meteor.publish('customers', function(skipCount) {
  var positiveIntegerCheck = Match.Where(function(x) {
    check(x, Match.Integer);
    return x >= 0;
  });
  check(skipCount, positiveIntegerCheck);
  
  return Customers.find({}, {
    limit: 3, // records to show per page
    skip: skipCount,
    sort: { 'name': 1 }
  });
});