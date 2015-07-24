Meteor.publish('customers', function() {
	return Customers.find();
});