
// This is a multiline comment
// Author : Harry

// document.write("This is an external js2");
// document.getElementById('th').innerHTML = "This is a para";

// var a1 = 45;
// var a11=5;
// var a2 = "This is me";
// document.write(a1+a11,"<br>");
// document.write(a1, a11,"<br>");
// console.log("This is console");
// console.log is used for debugging purposes

// var age = prompt("Tell me your age");
// alert("Your age is ", age);

// document.write("5 + 9 = ", 5+9,"<br>");
// document.write("5 - 9 = ", 5-9,"<br>");
// document.write("5 * 9 = ", 5*9,"<br>");
// document.write("5 / 9 = ", 5/9,"<br>");
// document.write("5 % 9 = ", 5%9,"<br>");

// var foodcost = prompt("What is the total amount");
// var no = prompt("No of people");
// document.write("The total cost of food was ", foodcost, "<br>");
// document.write("Each one of you has to pay ", (foodcost/no).toFixed(2),"<br>");

// javascript math functions

// document.write("2^9 = ", Math.pow(5,3),"<br>" );
// document.write("abs(-34) = ", Math.abs(-34),"<br>");
// document.write("sqrt(36) = ", Math.sqrt(36),"<br>");


// javascript String Functions
/*
var str1 = "i'm_groot";
document.write(str1.length,"<br>" );
document.write(str1.indexOf("m"),"<br>" );
document.write(str1.toLocaleUpperCase(),"<br>" );
document.write(str1.slice(0,5), "<br>");
document.write(str1.replace("groot","saurabh "));

*/



// Relational Operators : ==, !=, <, >, >=
// Logical Operators : &&, ||
/*
var age = prompt("What is your age");

if (age<20 && age>=10)
{

	document.write("You go to the school");
}

else if(age<10 && age>7)
{
	document.write("You also go to the school");
}
else if(age<6 && age>0)
{
	document.write("You  go to the play school");
}

else
{
	document.write("you can go to the college");
}

*/

// switch cases
/*
var day = prompt("what day is it today??")
switch(day)
{
 case "monday":
     document.write("dont eat chicken");
     break;
 case "tuesday":
     document.write("dont eat anything");
     break;
  default:
     document.write("eat whatever you want");

}
*/


// while loop

// var i =1;
// while(i<=1000)
// {
//     document.write(i, "<br>");
//     i++;
// }

// Do while loop

// var i = -11;
// do
// {
// 	document.write(i,"<br>");
// 	i++;
// } while(i<=17)


// for loop in js

// for ( i = 1; i <= 11; i++) {
// 	document.write(i,"          <br>");
// }


// arrays in javascript 

// var books = ["Harry potter", "ncert", "ctci", 65];

// document.write(books[0]);



// funtions in javascript


function harry(){

	document.write("bulao koi uss chutiye ko");
	console.log("We have executed harry function");


}

harry();
