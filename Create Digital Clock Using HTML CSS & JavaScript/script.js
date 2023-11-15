let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();

    // Update hours, ensuring that a leading zero is added if the value is less than 10
    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();

    // Update minutes, ensuring that a leading zero is added if the value is less than 10
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();

    // Update seconds, ensuring that a leading zero is added if the value is less than 10
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);

/*

Here's a breakdown of code:

1. let hrs = document.getElementById("hrs");: This line gets the HTML element with the id "hrs" and assigns it to the variable hrs.

2. let min = document.getElementById("min");: This line gets the HTML element with the id "min" and assigns it to the variable min.

3. let sec = document.getElementById("sec");: This line gets the HTML element with the id "sec" and assigns it to the variable sec.

4. setInterval(() => {...}, 1000): This function repeatedly executes the code inside the arrow function every 1000 milliseconds (1 second).

5. Inside the arrow function:

    * let currentTime = new Date();: This creates a new Date object representing the current date and time.

    * hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();: Updates the content of the element with id "hrs" to display the hours. The conditional operator (? :) adds a leading zero if the hours are less than 10.

    * min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();: Updates the content of the element with id "min" to display the minutes. Similarly, it adds a leading zero if the minutes are less than 10.

    * sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();: Updates the content of the element with id "sec" to display the seconds. It adds a leading zero if the seconds are less than 10.

Overall, this code provides a simple real-time clock display in the format HH:MM:SS.

*/