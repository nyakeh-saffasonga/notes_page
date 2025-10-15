 // let name = "Nyakeh Saffa-Songa";
        // let vacation = "Beach Vacation";
        // console.log(name);
        // alert("whats good :)");
        // console.log(confirm("would you like to get to the website"));
        // let answer = prompt("how old are you")
        // console.log(answer);
        // if (answer == 25) {
        //     console.log("nice age")
        // } else {
        //     console.log("haha noob get good 😂😂")
        // }
        
        // // quiz time

        // alert("QUIZ TIME!!!!!!");

        // answer = prompt("what is yes in spanish")
        // if (answer == "si") {
        //     alert("thats correct :) ur so smart")
        // } else {
        //     alert("haha ur wrong!!!! get good 😂😂")
        // }

        // answer = prompt("what is 2 * 6")
        // if (answer == 12) {
        //     alert("thats correct :) ur so smart")
        // } else {
        //     alert("haha ur wrong!!!! get good 😂😂")
        // }

        // answer = prompt("how many fingers does a human hand have")
        // if (answer == 5) {
        //     alert("thats correct :) ur so smart")
        // } else {
        //     alert("haha ur wrong!!!! get good 😂😂")
        // }

        // answer = prompt("who was the first president of the US")
        // if (answer == "george washington") {
        //     alert("thats correct :) ur so smart")
        // } else {
        //     alert("haha ur wrong!!!! get good 😂😂")
        // }

        // answer = confirm("true or false: the most common eye color is blue")
        // if (answer == false) {
        //     alert("thats correct :) ur so smart")
        // } else {
        //     alert("haha ur wrong!!!! get good 😂😂")
        // }

        // answer = prompt("what is west-mec's primary color")
        // if (answer == "orange") {
        //     alert("thats correct :) ur so smart")
        // } else {
        //     alert("haha ur wrong!!!! get good 😂😂")
        // }

        // answer = confirm("can you breathe underwater")
        // if (answer == false) {
        //     alert("thats correct :) ur so smart")
        // } else {
        //     alert("haha ur wrong!!!! get good 😂😂")
        // }

        // answer = prompt("what color are your teeth")
        // if (answer == "white") {
        //     alert("thats correct :) ur so smart")
        // } else {
        //     alert("haha ur wrong!!!! get good 😂😂")
        // }

        // answer = prompt("what color is my hair")
        // if (answer == "black") {
        //     alert("thats correct :) ur so smart")
        // } else {
        //     alert("haha ur wrong!!!! get good 😂😂")
        // }

        // answer = prompt("how old am i")
        // if (answer == 16) {
        //     alert("thats correct :) ur so smart")
        // } else {
        //     alert("haha ur wrong!!!! get good 😂😂")
        // }

        let kitchen = "spoon";
        kitchen = "fork";
        kitchen = "spork";
        console.log(kitchen);
        const lastName = "Saffa-Songa";
        // lastName = "Nyakeh"
        console.log(lastName);

        console.log(typeof(-65));
        console.log(typeof(20n));
        console.log(typeof("true"));
        console.log(typeof(true));
        console.log(typeof(undefined));
        console.log(typeof(null));

        let x = 5;
        if (x == 5) {
            console.log(x);
        }
        
        let y = "5";
        if (y == 5) {
            console.log("yes");
        }

        let z = "5";
        if (z === 5) {
            console.log(z);
        }

        // - 5
        // - 34
        // - 19
        // - 2
        // - 12

        // let radiusInput = Number(prompt("enter the radius of a circle:"));
        // console.log("The area of your circle is " + ((Math.PI) * (radiusInput*radiusInput)));

        // let scoreInput = Number(prompt("enter a score:"));
        // console.log("The square root of your value is " + Math.sqrt(scoreInput));

        // let angleInput = Number(prompt("enter an angle:"));
        // console.log("The cosine of this angle is " + Math.cos(angleInput));

        // let patrick = Number(prompt("enter a random number"));
        // console.log("If you take that number and round it down, it evaluates to " + Math.floor(patrick));
        
        // let vandal = Number(prompt("enter another random number"));
        // console.log("If you take that number and round it NORMALLY, it evaluates to " + Math.round(vandal));
        
        // let eulersInput = Number(prompt("random number part infinity"));
        // console.log("If you took that number, and added it to Euler's constant, it would be " + (eulersInput + Math.E));

        // let timeInput = Number(prompt("enter the time in hours"));
        // let speedInput = Number(prompt("enter the speed in miles per hour"));

        // alert("The distance is " + (speedInput * timeInput) + " miles.");

        // let aInput = Number(prompt("we are now going to solve the hypotenuse of a triangle. enter a value for a:"));
        // let bInput = Number(prompt("enter a value to b:"));
        // console.log("The hypotenuse of this triangle is" + Math.sqrt((aInput*aInput)+(bInput*bInput)));

        let randomValue = 3;
        let testBacktick = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        ${randomValue} Voluptas nisi at saepe.`;
        console.log(testBacktick);

        let input1 = prompt("what is your favourite color");
        let input2 = prompt("what is your favourite song");

        console.log(`Comparing ${input1} (${typeof(input1)}) and ${input2} (${typeof(input2)})`);
        console.log(`When compared with == ${input1 == input2}`);
        console.log(`When compared with === ${input1 === input2}`);
        console.log(`When compared with Object.is is ${Object.is(input1, input2)}`);

        /* CONDITION STATEMENTS --> If statement
        Conditions often use comparison operators like > (greater than), < (less than), == (equal to), != (not equal to), >= (greater than or equal to), and <= (less than or equal to).

        The condition inside the parenthesis must evaluate to a boolean value-either true or false 
        */

        let temperature = 25;

        if (temperature > 20) {
            console.log("Its a warm day!");
        }

        let userIsLoggedIn = false;

        if (userIsLoggedIn) {
            console.log("Welcome back!");
        } else {
            console.log("Please log in to continue.");
        }

        let score = 75;

        if (score >= 90) {
            console.log("You got an A!")
        } else if (score >= 80) {
            console.log("You got a B.");
        } else if (score >= 70) {
            console.log("You got a C.");
        } else {
            console.log("You need to study more.");
        }

        let isStudent = true;
        let isSenior = true;
        let price = 10;

        if (isStudent || isSenior) {
            price = 8;
        } else {
            price = 10;
        }

        console.log(price);