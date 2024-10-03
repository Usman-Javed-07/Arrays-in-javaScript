//    includes 

const numbers = [1,2,3,4,5];

console.log(includes(numbers , 1));

function includes (array , searchNumber) {
  for (let element of array)
    if( element === searchNumber)
        return true;
    return false;
}