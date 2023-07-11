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