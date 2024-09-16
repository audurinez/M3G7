let numbers = [1, 2, 3, 4, 5];
let listHTML = "";

for (let i = 0; i < numbers.length; i++) {
    listHTML += "<li>Number at index " + i + " is " + numbers[i] + "</li>";
}

document.getElementById("numberList").innerHTML = listHTML;


// Here a list is created. 
//An array containing number is created. An array is used to define elements
//The variable containing listhtml is empty to build the html content. 
//The for loop has serval purposes. It iterates through the number array, meaning it goes through it again until the number array is finished.
    // It starts at a 0 and and will continue as long as it the number is higher
    // By using numbers.length in the loop condition, the code ensures it processes every element in the array, regardless of how many there are.
//It starts with i (starting at 0) and then comes "<" meaning lower than the number.length and will continue as long as it is lower than length of the array
//i is increased as the process is repeated
// next comes what is linked to the listHTML content for the html file.
// It includes the current index (i) and the value at that index (numbers[i]). and will continue until the array is finished. 
// This is a common way to create lists or others repeated elements using javascript. :)
