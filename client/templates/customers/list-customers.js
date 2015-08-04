Template.listCustomers.helpers({
	customers: function() {
		return Customers.find();
	}
});

Template.listCustomers.events({
	'click #btnAddCustomer': function(e) {
		e.preventDefault();

		Router.go('addCustomer');
	}
});