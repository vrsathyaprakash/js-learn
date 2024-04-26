//1. singleton
// object.create

//const tinderUser = new Object()//singleton object

const tinderUser ={}//non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedin = false

const regularUser = {
     email: "samy@buy.com",
     fullname: {
          firstname:"sammy",
          lastname:"nagrare"
     }
}


//merging of objects

const obj1 ={1:"A",2:"B"}
const obj2 ={3:"A",4:"B"}

//const obj3= Object.assign({}, obj1,obj2) or
//spread operator to combine or merge two objects
const obj3 ={...obj1,...obj2}






//2.object literals-method

const suser = {
     name: "sathya",
     age:32,
     email:"sathyaprakash777.sp@gmail.com",
     isLoggedin:false
}