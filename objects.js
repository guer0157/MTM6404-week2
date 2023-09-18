const car = {
    make:"Ford",
    year: 1993,
    new:false,
    model:"Mustang",
    accidents: ["Hit bumper", "scratch left side", "broken window"]
    // color: "grey"
}

const addToObject = ()=>{
    console.log(car);
    car.color = "grey";
    car["accidents"] = ["Hit bumper", "scratch left side", "broken window"];
    console.log(car);
}

// addToObject();

const deleteObjectProperty = (property)=>{
    console.log(car);
    delete car[property]
    console.log(car);
}
deleteObjectProperty("accidents");