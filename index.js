// Task 1: Initialize the Array
let arr = new Array(7).fill("Hello");
console.log(arr); // <-- ADD THIS

// Task 2: Update part of the array
arr.fill("Hi", 2, 5);
console.log(arr);

// Task 3: Populate with for loop
let numbers = new Array(5);

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = i * 10;
}

console.log(numbers);