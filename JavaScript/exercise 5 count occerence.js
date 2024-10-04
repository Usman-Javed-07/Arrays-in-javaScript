//   count occrence 

//  const number = [1,2,3,4,4];

// const count = countOccrrence (number , 3);
// console.log(count);

//  function countOccrrence ( array , searchelement) {
    
//    const countarray = number.slice() .sort();
//    const counter = {};
//      for (let i = 0 ; i < countarray.length ; i ++) {
//         const ele = countarray [i];
//         if (counter[ele]) {
//             counter[ele] += 1;
//         }
//         else counter[ele] = 1;
//      }
//      return counter;
    
//  }


// mosh code 

 const  number = [1,2,3,4,5,5];
 const count = countOccrrence (number , 5);
console.log(count);
function countOccrrence ( array , searchelement) {

return array.reduce((accumalator , current) => {
    const occrence = (current === searchelement)
    console.log(accumalator , current , searchelement)
    return accumalator + occrence;
},0)
}