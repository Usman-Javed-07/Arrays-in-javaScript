//    max number

const max = getmax([1,2,3,4,7])

console.log(max);

function getmax (array) {
if (array.length === 0) return undefined;

return array.reduce ((a , b) => (a > b) ?  a :b );
 
}