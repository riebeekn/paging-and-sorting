Router.route('/customer/add', {
  name: 'addCustomer'
});

Router.route('/:page?/:sortField?/:sortDirection?', {  
  name: 'listCustomers'
});