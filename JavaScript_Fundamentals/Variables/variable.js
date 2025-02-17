// let admin, name2;
// name2 = "John";
// admin = name2;
// alert(admin);

// let planetName = "Earth";
// let userName = "Millie";

// it would be right to use upper case for birthday only because its the only value that never changes, age must stay lowercase.
//-------------
//hello 1
//hello name
//hello Ilya

// let age = prompt('How old are you?', 100); // 100 makes it pre-filled in
// alert(`You are ${age} years old!`);

// alert = notification
// prompt = type an answer (like Scanner in Java)
// confirm = bool (yes/no)

// let name = prompt("What is your name?", '');
// alert(`Your name is ${name}!`);

// conversion mainly works with casting , String(value) or Number(string) - for number specifically just add "+" before the string
// uranary is PEMDAS applied to a single variable, binary is PEMDAS applied to two
// equals sign performs the assignment and returns the result when used in an expression
// increment + decrement similar to java (++, --)
// "--" and "++" specifically return different things based on whether they are before/after the variable
    // if before, returns changed value, if after, returns unchanged value
    // just writing an expression like "c = ++a" changes a
// weird comma operators can perform multiple calculations at once but only keep the result of the last one

// a = 2, b = 2, c = 2 (before returns changed value), d = 1 (after returns unchanged value)
// a = 4 (changed DURING the assignment of x), x = 5

// 10, -1, 1, 2, 6, 9px, $45, 2, NaN, -9  5, -14, 1, NaN, -2
// subtraction always converts to numbers!!
// null turns into 0 after numeric conversion and undefined becomes NaN

//Both numbers are being taken in as strings, you can use alert(+a + +b); or Number casting

// === is used to check equality without type conversion.

//true, false, true, true, false, false, false
// null ONLY EQUALS undefined

// "?" works as a built-in if-else statement, most of the time ONLY USED TO ASSIGN A REsULT TO A VARIABLS
// alert will be shown because although it is 0 it is contained within a string - just because it contains "0" does not mean its empty

// let scriptName = prompt("What's the \"official\" name of JavaScript?")
// if(scriptName == "ECMAScript")
// {
//     alert("Right!");
// }
// else
//     alert("You don't know? ECMASCRIPT!");

// let numberInput = prompt("Input a number!")
// if(+numberInput > 0)
// {
//     alert(1);
// }
// else if(+numberInput < 0)
// {
//     alert(-1);
// }
// else if(+numberInput == 0)
// {
//     alert(0);
// }

//let result = (a+b < 4) ?  'Below': 'Over';  instantiate and do if/else on one line with "?"

// let message = (login == 'Employee') ? 'Hello':
//               (login == 'Director') ? 'Greetings' :
//               (login == '') ? 'No login':
//               '';

// && returns the first falsy found or the last value if nothing is found

// returns 2 b/c its the only truthy
// alert(1) is done but nothing is returned then 2 is sent to the outer alert, since its a truthy then the statement ends

//returns null b/c only needs one falsy to break everything - also first falsy found