// // clg --> console.log("yuhh");

// //  (reserved keyword) (variable name) (type of value)

// // declare variable:    let and var variables are able to be changed
// // let name;

// // assign value:
// let banana;
// banana = "banana";

// // Change value for the let variable:
// banana = "apple";

// console.log(banana);

// // const variable
// const youtubeChannel = "Mrbeast";
// // youtubeChannel = "JonYT";
// // Will give error because variable is a const (cannot be changed)
// console.log(youtubeChannel);

// let name = "Jonathan";
// let whatDoYouWannaBecomeInYourLife = "Programmer";
// let gender = "male";
// let twitterHandle = "JoniTwitter";
// console.log(name);
// console.log(whatDoYouWannaBecomeInYourLife);
// console.log(gender);
// console.log(twitterHandle);

// Primitive Types

//Excersice 2
// let firstFavNum = 15;
// let secondFavNum = 7;
// console.log(firstFavNum + secondFavNum);
// console.log(firstFavNum - secondFavNum);
// console.log(firstFavNum * secondFavNum);
// console.log(firstFavNum / secondFavNum);
// console.log(firstFavNum % secondFavNum);
// console.log(firstFavNum ** secondFavNum);

// // Excerise 3 Boolean
// let isJsProgramingLanguage = true;
// let isJsHard = false;
// let favNum = 15;
// console.log(favNum + undefined);

// comparison operators
// === checks type and value and vice versa for !==
// == would only check the value vice versa for !=

// Excersize 4 comparison
// let firstFavNum = 15;
// let secondFavNum = 7;
// console.log(firstFavNum > secondFavNum);
// console.log(firstFavNum < secondFavNum);
// console.log(firstFavNum >= secondFavNum);
// console.log(firstFavNum <= secondFavNum);
// console.log(firstFavNum === secondFavNum);
// console.log(firstFavNum == secondFavNum);
// console.log(firstFavNum !== secondFavNum);
// console.log(firstFavNum != secondFavNum);

// Strings
// let firstName = "Jonathan";
// let secondName = "Prz";

// 1.Concatenation
// let firstName = "Jonathan "; //Needed space because it wont put the space between them
// let secondName = "Prz";
// let fullName = firstName.concat(secondName);
// console.log(fullName);

// 2.Append
// let firstName = "Jonathan";
// firstName += " Castro"; //Space added because space isnt added again
// console.log(firstName);

// 3.Length
// console.log(firstName.length);

// 4.Cases
// firstName.toLowerCase()
// firstName.toUpperCase();

// 5.Slice

// Javascript Objects
// const person = {
//   firstName: "Jonathan",
//   lastName: "PC",
//   age: 21,
//   location: ["Planet", "Earth"],
//   isProgrammer: true,
// };

// // Accessing items from Objects
// console.log(person.firstName); //Will output firstName value

// console.log(person["firstName"]); //Will output firstName value

// situational for example:
// const person2 = {
//   10: "ten,",
// };
// console.log(person["10"]);       //This would be needed to avoid syntax errors

//Adding a value into an Object
const person3 = {
  firstName: "Jonathan",
};

person3.lastName = "PC";
person3.location = ["Planet", "Earth"];

console.log(person3);

//Deleting a value from the Object
delete person3.lastName;

// Challenge for Objects:

//1. Create object name(car)
//2. add (type, model, color) as properties
//3. check the type of object
//4. Update the type property to Toyota
//5. Add new property wheels
//6. log car to the console

// const car = {
//   type: "BMW",
//   model: "M240",
//   color: "grey",
// };

// console.log(car.type);

// car.type = "Toyota";
// car.wheels = 4;

// console.log(car);

//End timestamp of video: 3:26:22
