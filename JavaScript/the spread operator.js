    // the spread operator 

    // spread operator is more efficient than concat method 


    const first  = [1,2,3];
    const second = [4,5,6];


    const combined = [...first , 'a', ...second , 'b'];

    const copy = [...combined];

    console.log(combined);

    console.log(copy);