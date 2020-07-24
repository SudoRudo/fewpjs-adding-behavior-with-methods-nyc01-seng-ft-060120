// Your code here

class Cat {
  constructor(name, sex){
  this.name = name
  this.sex = sex 
  }
  
  speak(){
    `${this.name} says meow!`
  }
}

class Dog {
  constructor(name, sex){
  this.name = name
  this.sex = sex 
  }
  
  speak(){
    `${this.name} says woof!`
  }
}

class Bird {
  constructor(name, sex){
  this.name = name
  this.sex = sex
  }
  
  speak(){
    if (this.sex === "male"){
      `It's me! ${this.name}, parrot!`
    } else {
    `${this.name} says squawk!`
    }
  }
}





