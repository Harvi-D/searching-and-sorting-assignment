const sort = require("./sort");

/**
 * Sort the array of customers by first and last name
 * @param {array} customers
 */

 function compare(left, right) {
    if (left === right) {
      return 0;
    }
    if (left > right) {
      return 1;
    }
    if (left < right) {
      return -1;
    }
}

function sortByName(customers) {
    
    let fullName = customers.map((customer) => {
        customer.lastName + customer.firstName;
    });
  
    let sortByLast = sort(compare, fullName);
    customers = [];
    
    sortByLast.forEach((name) => {
      let lastName = name.slice(0);
      let firstName = name.slice(1);

      let finalName = { lastName, firstName }
      customers.push(finalName);
    });

    return customers;
}

module.exports = sortByName;
