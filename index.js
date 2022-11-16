/* 
    Assignment 11/15/2022
    Spin up a new npm project.
    install moment
    figure out how to import this library
    use a function (of your choosing) from the moment library
    - Do whatever you'd like for the output. 
    - The goal here is to learn about installing, importing, and utilizing a package.
    give me a way to run your script
    push to github
*/

const moment = require("moment");

console.log(moment.duration(2, "seconds"));
console.log(moment.duration(2, "minutes"));
// moment.duration(2, "hours");
// moment.duration(2, "days");
// moment.duration(2, "weeks");
// moment.duration(2, "months");
// moment.duration(2, "years");
// moment.duration("2", "years");
