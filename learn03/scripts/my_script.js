// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Meri";

const taxRate = .07; // This is a constant
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {

    //fix the errors
    var firstName = "Meredith",
        lastName = "Engel";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    var firstName = "Meredith",
        lastName = "Engel";
    const taxRate = .07; // This is a constant
    document.getElementById("global").innerHTML = name;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    //taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}


function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    //dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Xhina"
    document.getElementById("dog1-2").innerHTML = dog2;
}


function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Xhina"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    const breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breed;

}


function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 10 + 30
    document.getElementById("addition").innerHTML = "10 + 30 = " + addition;

    let subtraction = 20 - 30
    document.getElementById("subtraction").innerHTML = "20 - 30 = " + subtraction;

    let multiplication = 3 * 5
    document.getElementById("multiplication").innerHTML = "3 * 5 = " + multiplication;

    let exponent = 2 ** 4
    document.getElementById("exponent").innerHTML = "2 ** 4 = " + exponent;

    let division = 20 / 5
    document.getElementById("division").innerHTML = "20 / 5 = " + division;

    let modulus = 10 % 3
    document.getElementById("modulus").innerHTML = "10 % 3 = " + modulus;

    // increment
    let a = 1;
    a++;
    ++a;

    // Decrement
    let b = 1;
    b--;
    --b;
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    var x = 10
    document.getElementById("equals").innerHTML = "x = 10    =" + "x = " + x;
    x += 1
    document.getElementById("plus-equals").innerHTML = "x += 1   =" + x;

    x -= 2
    document.getElementById("minus-equals").innerHTML = "x -= 2   =" + x;

    x *= 3
    document.getElementById("times-equals").innerHTML = "x *= 3   =" + x;

    x /= 9
    document.getElementById("divide-equals").innerHTML = "x /= 9   =" + x;

    x %= 3
    document.getElementById("modulus-equals").innerHTML = "x %= 3   =" + x;


}



function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const cats = ["Siamese", "Maine Coon", "Tabby"];
    document.getElementById("array").innerHTML = cats;

    const student = { firstName: 'Anna', lastName: 'Lea', class: '10' };
    document.getElementById("object").innerHTML = student;
}