let person = {name:"daniel", age:32}

let {name, town} = person;

console.log(town)

let family = [
    {name:"daniel", age:32},
    {name:"mabinty", age:28}, 
    {name:"zyanna", age:1},
    {name:"amara", age:1}
]

const result = family.find(({name}) => name === "daniel")
console.log(result)

let tv = "to:";

let response = tv.split(":");

console.log(response)
