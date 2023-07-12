 // Get DOM reference to the input element
 const inputElement = document.querySelector('#myInput');
    
 // Get DOM reference to the button element
 const buttonElement = document.querySelector('#myButton');
 
 // Get DOM reference to the output element
 const outputElement = document.querySelector('#output');
 
 // Add event listener to the button
 buttonElement.addEventListener('click', function() {
   const inputValue = inputElement.value;
   
   // Check if the input is empty
   if (inputValue.trim() !== '') {
     outputElement.textContent = 'Input: ' + inputValue;
   } else {
     outputElement.textContent = 'Input is empty';
     alert('Input is empty. Please enter input.');
   }
 });

 // Get a reference to a specific DOM element
 const titleElement = document.querySelector('#title');
    
 // Use console.log to verify DOM element reference
 console.log(titleElement);
 
 // Get references to multiple DOM elements
 const buttonElement1 = document.querySelector('#myButton1');
 const messageElement = document.querySelector('#message');
 
 // Display a value in a DOM element using innerHTML
 titleElement.innerHTML = 'Updated Title';
 
 // Use setTimeout to delay showing a message in the DOM
 setTimeout(function() {
   messageElement.innerHTML = 'Delayed Message';
 }, 3000);
 
 // Add an event listener to a button
 buttonElement1.addEventListener('click', function() {
   // Change the code to update the content of a specific DOM element
   titleElement.innerHTML = 'Button Clicked';
   titleElement.classList.add('button-clicked');
   alert("Button clicked")
 });
 