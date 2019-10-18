function getHistory(){
  return document.getElementById("history-value").innerText;
}

function printHistory(num){
  document.getElementById("history-value").innerText=num;
}

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
  const n = Number(num);
  const value = n.toLocaleString("en");
  return value
}

function reverseNumberFormat(num){
  return Number(num.replace(/,/g,''))
}




const operator = document.getElementsByClassName("operator")
for(const i = 0; i < operator.length; i++){
  operator[i].addEventListener('click', function(){
    alert("The user clicked:" + this.id);
  })
}

