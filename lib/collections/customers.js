Customers = new Mongo.Collection('customers');

Meteor.methods({
  customerInsert: function(customerAttributes) {
    check(customerAttributes, {
      name: String,
      surname: String,
      email: String
    });

    var customer = _.extend(customerAttributes, {      
      acquired: new Date()
    });

    Customers.insert(customer);
  }
});