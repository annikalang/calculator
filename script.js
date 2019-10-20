function getHistory(){
  return document.getElementById("history-value").innerText;
};
// alert(getHistory());

function printHistory(num){
  document.getElementById("history-value").innerText = num;
};

// printHistory("4*4");

function getOutput(){
  return document.getElementById("output-value").innerText;
}

function printOutput(num){
  if(num == ""){
    document.getElementById("output-value").innerText=num;
  }
  else{
  document.getElementById("output-value").innerText=getFormattedNumber(num);
  }
}

function getFormattedNumber(num){
  if(num == "-"){
    return "";
  };
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value
}

function reverseNumberFormat(num){
  return Number(num.replace(/,/g,''))
}




let operator = document.getElementsByClassName("operator")
for(let i = 0; i < operator.length; i++){
  operator[i].addEventListener('click', function(){
    // alert("The operator clicked:" + this.id);
    if(this.id == "clear"){
      printHistory("");
      printOutput("");
    }
    if(this.id == "backspace"){
      let output = reverseNumberFormat(getOutput()).toString();
      if(output){ // if output has a value
        output = output.substr(0,output.length-1);
        printOutput(output);

      }
    }
    else{
      let output = getOutput();
      let history = getHistory();
      if(output == "" && history != ""){
        if(isNaN(history[history.length-1])){
          history = history.substr(0, history.length-1);
        }
      }
      if(output != "" || history != ""){
        // condition? true : false
        output = output == ""? output : reverseNumberFormat(output);
        history = history + output;
        if(this.id == "="){
          let result = eval(history);
          printOutput(result);
          printHistory("");
        }
        else{
          history = history + this.id;
          printHistory(history);
          printOutput("");

        }
      }
    }
  })
}

let number = document.getElementsByClassName("number")
for(let i = 0; i < number.length; i++){
  number[i].addEventListener('click', function(){
    // alert("The number clicked:" + this.id);
    let output = reverseNumberFormat(getOutput());
    if(output! = NaN) { // if number is a number
      output = output + this.id;
      printOutput(output);
    }
  });
}

