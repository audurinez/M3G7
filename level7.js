//try to change the value of "number" by erasing 10 and writing a different number and observe the different output

// Here what happens is that title on the website will change depending of if the number lesser or greater than 5
// But there is a fault, it will tell that the number is less if it is equal, if the number is 5.
let number = 3;
if (number > 5) {
    document.getElementById("message").innerHTML = "Number is greater than 5";
} else {
    document.getElementById("message").innerHTML = "Number is 5 or less";
}
 