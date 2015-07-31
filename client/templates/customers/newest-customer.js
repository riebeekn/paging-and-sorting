Template.newestCustomer.onCreated(function() {
  this.subscribe('latestCustomer');
});

Template.newestCustomer.helpers({
	'customerName': function() {
		var customer = Customers.findFromPublication('newestCustomer').fetch();
		
	  if (customer.length > 0) {
	  	return customer[0].name + ' ' + customer[0].surname;
		}

		return "... actually we appear to have no customers!";
	}
});