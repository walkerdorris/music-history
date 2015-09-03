/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  In the HTML, have one input field where someone can enter
  in a temperature. Then have a radio button group where
  Celsius or Fahrenheit can be selected as the scale that the
  number should be converted to. Then a button that,
  when clicked, displays the converted.
*/

function toCelsius(fTempVal) {
  var cTempVal = (fTempVal - 32) * (5 / 9);
  return cTempVal;
}

function toFahrenheit(cTempVal) {
  var fTempVal = (cTempVal * (9 / 5)) + 32;
  return fTempVal;
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter(e) {
    var typedTemp = document.getElementById("inputTemp").value;
    // This will actually return an array containing both of the radio buttons
    // so you will need to look at each item in the array and see if the 'checked'
    // property is true (sample code provided)
    var optionChosen = document.getElementsByName("conversion_type");

    // for loop
    for (var i = 0; i < optionChosen.length; i++) {
      type = optionChosen[i];
      if (type.checked && type.value === 'celsius') {
        document.write(toCelsius(typedTemp));
      } else {
        document.write(toFahrenheit(typedTemp));
      }
    }
  }
  // Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// Assign a function to be executed when the button is clicked
button.onclick = determineConverter;