// function to get the history value and its id
function getHistory(){
  return document.getElementById("history-value").innerText;
};

// following alert statement is for testing purposes
// alert(getHistory());


// function to print the history value
function printHistory(num){
  document.getElementById("history-value").innerText = num;
};

// following alert statement is for testing purposes
// printHistory("4*4");

// function to get the ouput value of the calculator
function getOutput(){
  return document.getElementById("output-value").innerText;
}

// function to print the output of the calculator
function printOutput(num){
  if(num == ""){ // if the number is empty, set the output to empty
    document.getElementById("output-value").innerText = num;
  }
  else{ // else (if the numbe3r is not empty), we convert it to a comma-separated value
    document.getElementById("output-value").innerText = getFormattedNumber(num); // for this function see below
  }
}

// following method statement is for testing purposes
// printOutput("444");

// function that reads the value and returns the comma-separated value for better readability
function getFormattedNumber(num){
  if(num == "-"){ // if there is a minus sign
    return ""; // then just return and empty value
  };
  let n = Number(num);
  let value = n.toLocaleString("en"); // returns number as local sting (here english -> "en")
  return value;
}

// function to convert comma-separated value from above into a normal number
function reverseNumberFormat(num){
  return Number(num.replace(/,/g,'')); //replacing the comma (in between slashes and g -> '/x/g') with an empty character (given after the comma as the second argument)
}

// following alert statement is for testing purposes
// alert(reverseNumberFormat(getOutput()));


// save all the operators in a variable
let operator = document.getElementsByClassName("operator");

// iterate over all operators
for(let i = 0; i < operator.length; i++){
  operator[i].addEventListener('click', function(){ // give a click event-listener to all of them
    // following alert statement is for testing purposes
    // alert("The operator clicked:" + this.id);
    if(this.id == "clear"){ // if the user clicks on the clear operator, delete everything from the result window
      printHistory(""); // both history and output are deleted
      printOutput("");
    }
    else if(this.id == "backspace"){ // if the user clicks on the backspace (CE), the commas on the number have to be set again
      let output = reverseNumberFormat(getOutput()).toString(); // and it should be converted to a number
      if(output){ // if output has a value
        output = output.substr(0,output.length-1); // remove the last character
        printOutput(output); // print it back
      }
    }
    else{
      let output = getOutput(); // declare output and history values
      let history = getHistory();
      if(output == "" && history != ""){ // it has to be checked if the output/history is empty, because if yes we cannot proceed
        if(isNaN(history[history.length-1])){
          history = history.substr(0, history.length-1);
        }
      }
      if(output != "" || history != ""){
        // condition? true : false
        output = output == ""? output : reverseNumberFormat(output);
        history = history + output; // output is added to the history value
        if(this.id == "="){ // if user clicks on the equal sign
          let result = eval(history); // then history is evaluated
          printOutput(result); // the result is printed in the output
          printHistory(""); // and the history is set to empty
        }
        else{ // for other operators
          history = history + this.id; // the operator is added to the history
          printHistory(history); // the history is printes
          printOutput(""); // and the output is set to empty

        }
      }
    }
  });
};

// save all the numbers in a variable
let number = document.getElementsByClassName("number");

// iterate over all numbers
for(let i = 0; i < number.length; i++){
  number[i].addEventListener('click', function(){ // give a click event-listener to all of them
    // following alert statement is for testing purposes
    // alert("The number clicked:" + this.id);
    let output = reverseNumberFormat(getOutput()); //removes commas from output
    if(output != NaN) { // check if output is a number
      output = output + this.id; // concatenate the id to the output
      printOutput(output); // and print it
    }
  });
}
