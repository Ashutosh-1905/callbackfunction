// Array Iteration:

const numbers = [10,11,12,13,14,15];

numbers.forEach(function(elements){
    console.log(elements);
});

// setTimeout:

function greet(){
    console.log("Hello Good Evening");
}
setTimeout(greet,2000);

// function practice

function myfunction() {
  console.log("hello");
}

function addition(num1, num2, callback, test, say, nafis) {
  let sum = num1 + num2;
  console.log(sum);
  callback();
  test();
  say();
  nafis();

  function test() {
    console.log("how are you");
  }

  function say() {
    console.log("I am fine");
  }

  function nafis() {
    console.log("what are you doing");
  }
}
addition(123, 45, myfunction);

//.
// practice //
//.

function ashu(name, cb, sir,kuchbhi) {
  console.log(`hello ${name}`);
  cb();
  sir();
  kuchbhi();
}

function sir(){
    console.log("kya padai kari aaj");
}

function student(){
    console.log("I learned about Callback functions");
}

function kaif() {
  console.log("how are you");
}

ashu("nihal", kaif,sir,student);

