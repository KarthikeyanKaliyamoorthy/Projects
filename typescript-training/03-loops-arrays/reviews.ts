let reviews: number[] = [10,5,6,7,89];

let total:number =0;
let average:number=0;
for(let i=0; i<reviews.length; i++) {
    console.log(reviews[i]);
    total+=reviews[i];
}

console.log('Total: '+total);

average=total/reviews.length;

console.log('Average review: '+average);