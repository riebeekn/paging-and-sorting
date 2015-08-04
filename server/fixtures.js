// Fixture data
Meteor.startup(function() {
  if (Customers.find().count() === 0) {
    Customers.insert({
      name: 'Fred',
      surname: "Amia",
      email: 'freddy@example.com'
    });
    Customers.insert({
      name: 'Bob',
      surname: 'Edelson',
      email: 'edelson.bob@example.com'
    });
    Customers.insert({
      name: 'Dan',
      surname: "Carlson",
      email: 'carlsondan@example.com'
    });
    Customers.insert({
      name: 'Alice',
      surname: 'Foster',
      email: 'a.foster@example.com'
    });
    Customers.insert({
      name: 'Erica',
      surname: "Breeson",
      email: 'ericabreeson@example.com'
    });
    Customers.insert({
      name: 'Cindy',
      surname: 'Driver',
      email: 'cindy.driver@example.com'
    });
  }
});