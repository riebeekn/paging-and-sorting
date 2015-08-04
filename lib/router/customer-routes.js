Router.route('/', {  
	name: 'listCustomers',
	waitOn: function() {     
		return Meteor.subscribe('customers');  
	}
});

Router.route('/customer/add', {
	name: 'addCustomer'
});