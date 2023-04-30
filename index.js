// 1 Parse a JSON string and access its properties:
// '{"name": "John Smith", "age": 35, "isMarried": true}'

/////////////////////////////////////////////// JSON PARSE

let string = '{"name": "John Smith", "age": 35, "isMarried": true}';  //<        JSON strings

let newobj = JSON.parse(string)
console.log(newobj)

////////////////////////////////////////////////////////////////////////////////

// Convert a JavaScript object to a JSON string

const person = {
   name: "John Smith",
   age: 35,
   isMarried: true,
};

let jsonsting = JSON.stringify(person)
console.log(jsonsting)

/////////////////////////////////////////////////////////////////
// Loop through a JSON array and access its properties
const people = [
    {
      name: "John Smith",
      age: 35,
      isMarried: true,
    },
    {
      name: "Jane Doe",
      age: 28,
      isMarried: false,
    },
  ];
let jsonppl = JSON.stringify(people)
 
  console.log(jsonppl)

// for(let key in jsonppl){
//     if(jsonppl.hasOwnProperty(key)){
//         console.log(jsonppl[key].name)
//     }
// }
// for(let i =0 ;i<jsonppl.length;i++){
//     let obj = jsonppl[i]
//     console.log(obj.name)
// }

for(var key in jsonppl.jsonData) {
    for (var key1 in jsonppl.jsonData[key]) {
        console.log(jsonppl.jsonData[key][key1])
    }
 }

   
//////////////////////////////////////////////////////////////////////////////////
// Add a new property to a JSON object
// job: “Software Engineer”

let oldnew = JSON.parse(jsonppl)
console.log(oldnew)
for(let element of oldnew){
    element.job= "Software Engineer"

}
console.log(oldnew)

let json = JSON.stringify(oldnew)
console.log(json)




///////////////////////////////////////////////////////////////////////////////////
// Convert a JSON string to a JavaScript object, modify it, and convert it back to a JSON string
// (make john single again)
let convertedback = JSON.parse(json)

for(let obj of convertedback){
    if(obj.isMarried === true){
        obj.isMarried =false
        break

    }

}

//john single again

let backtoJSON = JSON.stringify(convertedback)
   
console.log(backtoJSON)
