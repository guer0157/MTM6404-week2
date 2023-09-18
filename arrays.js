const groceryList = ["apples", "oranges", "bananas", "avocados"];

const arrayMethods = ()=>{
    groceryList.length;//3
    console.log(groceryList[1]);
    groceryList[1] = "pears" 
    const secondItemInTheList = groceryList[1];
    console.log(secondItemInTheList);
}
arrayMethods();

const addToGroceryList = (newItem)=>{
    console.log(groceryList);
    groceryList[3]=newItem //  ["apples", "oranges", "bananas", tangerines];
    console.log(groceryList);
    console.log(groceryList.join());
}
addToGroceryList("tangerines");

// Define a function 'truncate' that returns a
//‘shortened phrase’ based on a complete phrase provided
//by the user. The user also should provide the 'limit’
//(approx. number of characters of the truncate phrase).
// Adds '...' at the end of the resulting string.
// Don't end in the middle of a word.
const phrase = 'I told my wife she should embrace her mistakes. She hugged me.'

const truncate = (text, limit) =>{
    const cutText = text.substring(0,limit);
 return cutText+"...";
}

console.log(truncate(phrase, 11)) 