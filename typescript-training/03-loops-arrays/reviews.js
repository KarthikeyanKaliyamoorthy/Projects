var reviews = [10, 5, 6, 7, 89];
var total = 0;
var average = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
console.log('Total: ' + total);
average = total / reviews.length;
console.log('Average review: ' + average);
