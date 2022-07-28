//for loop;-
var obj = [
    { person: "Thean", age: "25", company: "xxx" },
    { person: "Arasan", age: "28", company: "yyy" },
    { person: "Kelathi", age: "21", company: "zzz" },
    ];
for(let i =0;i<obj.length;i++)
{
console.log(obj[i]);
let propertyJSON = JSON.stringify(obj[i]);
    console.log(propertyJSON);

}
//for of loop:-

for(let property of obj)
{
console.log(property);
let propertyJSON = JSON.stringify(property);
console.log(propertyJSON);
}
//for in loop:-

for(let property in obj)
{
console.log(obj[property]);
let propertyJSON = JSON.stringify(obj[property]);
    console.log(propertyJSON);
}
//for each loop:-

obj.forEach(element => console.log(element));