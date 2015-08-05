Customers = new Mongo.Collection('customers');

Meteor.methods({
  customerInsert: function(customerAttributes) {
    check(customerAttributes, {
      name: String,
      surname: String,
      email: String
    });

    Customers.insert(customerAttributes);
  }
});