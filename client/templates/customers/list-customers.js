Template.listCustomers.onCreated(function() {
	var currentPage = parseInt(Router.current().params.page) || 1;
  var skipCount = (currentPage - 1) * 3; // 3 records per page
  
	this.subscribe('customers', skipCount);
});

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