//   moving element in an array




// my code / have some error
//  const number = [1,2,3,4];

// moveElement();

//  function moveElement (array , index , ofset) {
//       console.log('original array ' + number);
// array = 2;
// index = 1;
// ofset = number[array]; 
//  for (let i = array ; i >= index ; i --)
//     number[i] = number[i-1];
// number[index] = ofset;
// console.log('moved array ' + number);
//  }

//   mosh code 


const number = [1,2,3,4];
const output = move (number , 1, 3);
console.log(output);

function move (array, index , ofset) {
    const positon = index + ofset;
    if (index > array.length || index < 0) {
        console.log ( 'invalid ofset');
    return;
    }
    const output = [...array];
    const element = output.splice(index , 1)[0];
    output.splice (positon , 0 , element);
    return output;
}
