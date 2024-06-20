# Array-Array-Methods-question-
**1. Coding Ques on: Custom Map Function**<br/>

 Implement a custom function customMap that mimics the behavior of the JavaScript
 Array.prototype.map method. It should not use the built-in map method and should work as
 expected when tested with an array.
 
 **2. Debugging Question: Fix the Filter** <br/>
 
 Given the following code, identify and fix the issues to make it work as intended. It’s supposed to filter out all negative numbers and return a new array.<br/>
 
 const numbers = [1, -2, 3, -4, 5]; <br/>
 const positives = numbers.filter(n => n < 0);<br/>
 console.log(positives);
 
**3. Predict Output: Nested Map and Filter**<br/>

 What is the output of the following code snippet?<br/>
 const arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];<br/>
 const result = arrays.map(arr => arr.filter(num => num % 2 === 0));<br/>
 console.log(result);
 
 **4. Coding Ques on: Sum of Squares**<br/>
 
 Write a JavaScript function that takes an array of numbers and returns the sum of the squares of those numbers, using reduce .
 
**5. Predict Output: forEach with a Twist**<br/>

 What does the following code output? <br/>
 let sum = 0;<br/> 
 const numbers = [1, 2, 3, 4, 5]; <br/>
 numbers.forEach((num, index) => {<br/>
 if (index % 2 === 0) sum += num;<br/>
 });<br/>
 console.log(sum);
 
**6. Debugging Ques on: Array.from Issue**<br/>

Explain why the following code doesn’t produce the expected output ( [0, 1, 2, 3, 4] ) and
 correct it. <br/>
 const arrayLike = { length: 5 };<br/>
 const newArray = Array.from(arrayLike, (v, i) => i);<br/>
 console.log(newArray);<br/>
 
**7. Coding Question: Filtering and Accumulating**<br/>

 Using filter and reduce , write a function that takes an array of objects with proper es name
 and value and returns the sum of the values of objects whose name property starts with the letter ‘a’ or ‘A’.
 
 **8. Predict Output: Complex reduce**<br/>
 
 What is the output of the following code? <br/>
 const numbers = [1, 2, 3, 4, 5];<br/>
 const result = numbers.reduce((acc, curr) => {<br/>
 if (curr % 2 === 0) {<br/>
 acc.even.push(curr);<br/>
 } else {<br/>
 acc.odd.push(curr);<br/>
 }<br/>
 return acc;<br/>
 }, { odd: [], even: [] });<br/>
 console.log(result);<br/>
 
 **9. Coding Question: Transforming an Array-Like Object**<br/>
 
 Create a function that takes an array-like object with numeric keys and transforms it into a proper array. For example, {0: 'a', 1: 'b', 2: 'c', length: 3} should be transformed into ['a',
 'b', 'c'] .
 
 **10. Debugging Ques on: Unexpected forEach Behavior**<br/>
 The following code is intended to log each number multiplied by 2, but it’s not working as
 expected. Iden fy and fix the issue.  
 
 const numbers = [1, 2, 3, 4, 5];<br/>
 numbers.forEach(num => {<br/>
});<br/>
 num *= 2;<br/>
 console.log(numbers)<br/>
