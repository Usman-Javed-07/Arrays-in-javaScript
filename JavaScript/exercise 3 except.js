    //  exercise 3 except
    
//     const numbers = [1,2,3,4,5];

// console.log(includes(numbers , 1));

// function includes (array , searchNumber) {
//   for (let element of array)
//     if( element === searchNumber)
//         numbers.pop();
// }

const numbers = [1,2,3,4,5];

const output = except (numbers , [1,4,5])

console.log(output);

function except (array , excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
    output.push(element);
return output;
}