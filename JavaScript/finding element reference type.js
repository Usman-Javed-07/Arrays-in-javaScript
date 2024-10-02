    //  finding element refernce types

    const courses = [
        {id : 1, name : 'a' },
        {id : 2, name : 'b' },
    ];



//   const course =  courses.find(function(course) {
//         return course.name === 'a';
// });



const course =  courses.findIndex(function(course) {
    return course.name === 'b';
});

 console.log(course);