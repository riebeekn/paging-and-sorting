CustomerSortSettings = {};

CustomerSortSettings.getSortParams = function(sortField, sortDirection) {
  var sortParams = [];
  
  var direction = sortDirection || 'asc';

  var field = sortField || 'lastname';
  if (field === 'firstname') {
    sortParams.push(['name_sort', direction]);
    sortParams.push(['surname_sort', direction])
  } else if (field === 'lastname') {
    sortParams.push(['surname_sort', direction]);
    sortParams.push(['name_sort', direction]);
  } else if (field === 'email') {
    sortParams.push(['email', sortDirection]);
  } 

  return sortParams;
}

CustomerSortSettings.sortField = function() {
  return Router.current().params.sortField || 'lastname';
}

CustomerSortSettings.sortDirection = function() {
  return Router.current().params.sortDirection || 'asc';
}

CustomerSortSettings.toggleSortDirection = function(sortBy) {
  if (this.sortField() !== sortBy) {
    return 'asc';
  } else {
    if (this.sortDirection() === 'asc') {
      return 'desc';
    } else {
      return 'asc';
    }
  }
}

CustomerSortSettings.getSortIconClass = function(element) {
  if (this.sortField() === element) {
    return this.sortDirection() === "asc" ? 
      "fa fa-sort-asc" : "fa fa-sort-desc";
  } else {
    return "fa fa-sort";
  }
}