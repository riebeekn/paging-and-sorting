Meteor.publish('customers', function(skipCount) {
  Meteor._sleepForMs(2000);
  Counts.publish(this, 'customerCount', Customers.find(), { 
    noReady: true
  });
  
  var positiveIntegerCheck = Match.Where(function(x) {
    check(x, Match.Integer);
    return x >= 0;
  });
  check(skipCount, positiveIntegerCheck);

  return Customers.find({}, {
    limit: parseInt(Meteor.settings.public.recordsPerPage),
    skip: skipCount
  });
});