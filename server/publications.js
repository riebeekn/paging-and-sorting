FindFromPublication.publish('customers', function(skipCount, sortField, sortDirection) {
  // parameter validations
  check(skipCount, CustomChecks.positiveIntegerCheck);
  check(sortField, CustomChecks.sortFieldCheck);
  check(sortDirection, CustomChecks.sortDirectionCheck)

  Counts.publish(this, 'customerCount', Customers.find(), { 
    noReady: true
  });
  
  return Customers.find({}, {
    limit: parseInt(Meteor.settings.public.recordsPerPage),
    skip: skipCount,
    sort: CustomerSortSettings.getSortParams(sortField, sortDirection)
  });
});

FindFromPublication.publish('newestCustomer', function() {
  return Customers.find({}, {
    limit: 1,
    sort: {'acquired': -1}
  });
});