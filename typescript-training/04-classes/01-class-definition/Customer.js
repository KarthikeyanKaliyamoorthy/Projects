var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
var myCustomer = new Customer("Rockkkkk!", "Starrrrrr!");
console.log(myCustomer.firstName + " " + myCustomer.lastName);
