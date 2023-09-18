// var, let or const
const firstName = "Cesar";

const greeting = ()=>{
    const greet = `Hello ${firstName} ${firstName.length}`;
    console.log(firstName)
    console.log(greet); 
}
// greeting();

const printLowerCase = ()=>{
    const title = "HELLO"
    const toLower = title.toLowerCase()
    console.log(toLower) //"hello"
    console.log("Original string", title) 
}
// printLowerCase();

//includes
const checkIncludedString = ()=>{
    const str = "Space";
    const pace = str.includes("pace");
    const indexOfS = str.indexOf("S");
    const getPace = str.substring(1)
    console.log("The index of S is:", indexOfS)
    console.log("Does the word space include pace?", pace)
    console.log(getPace);
}
checkIncludedString();
