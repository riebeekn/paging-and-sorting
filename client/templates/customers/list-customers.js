Template.listCustomers.onCreated(function() {
  var template = this;

  template.autorun(function() {
    var skipCount = (currentPage() - 1) * Meteor.settings.public.recordsPerPage;
    template.subscribe(
      'customers', 
      skipCount, 
      Router.current().params.sortField,
      Router.current().params.sortDirection
    );
  });
});

Template.listCustomers.helpers({
  customers: function() {
    return Customers.findFromPublication('customers', {}, {
      sort: CustomerSortSettings.getSortParams(
        CustomerSortSettings.sortField(), 
        CustomerSortSettings.sortDirection())
    });
  },
  prevPage: function() {
    var previousPage = currentPage() === 1 ? 1 : currentPage() - 1;
    return Router.routes.listCustomers.path({
      page: previousPage,
      sortField: Router.current().params.sortField,
      sortDirection: Router.current().params.sortDirection
    });
  },
  nextPage: function() {
    var nextPage = hasMorePages() ? currentPage() + 1 : currentPage();
    return Router.routes.listCustomers.path({
      page: nextPage,
      sortField: Router.current().params.sortField,
      sortDirection:Router.current().params.sortDirection
    });
  },
  prevPageClass: function() {
    return currentPage() <= 1 ? "disabled" : "";
  },
  nextPageClass: function() {
    return hasMorePages() ? "" : "disabled";
  },
  firstNameIconClass: function() {
    return CustomerSortSettings.getSortIconClass("firstname");
  },
  lastNameIconClass: function() {
    return CustomerSortSettings.getSortIconClass("lastname");
  },
  emailIconClass: function() {
    return CustomerSortSettings.getSortIconClass("email");
  }
});

Template.listCustomers.events({
  'click #btnAddCustomer': function(e) {
    e.preventDefault();

    Router.go('addCustomer', {page: Router.current().params.page});
  },
  'click #firstName,#lastName,#email': function(e) {
    e.preventDefault();

    if (e.target.id === 'firstName') {
      navigateToCustomersRoute('firstname');
    } else if (e.target.id === 'lastName') {
      navigateToCustomersRoute('lastname');
    } else if (e.target.id === 'email') {
      navigateToCustomersRoute('email');
    }
  }
});

var navigateToCustomersRoute = function(sortField) {
  Router.go('listCustomers', {
    page: Router.current().params.page || 1,
    sortField: sortField,
    sortDirection: CustomerSortSettings.toggleSortDirection(sortField)
  });
}

var hasMorePages = function() {
  var totalCustomers = Counts.get('customerCount');
  return currentPage() * parseInt(Meteor.settings.public.recordsPerPage) < totalCustomers;
}

var currentPage = function() {
  return parseInt(Router.current().params.page) || 1; 
}