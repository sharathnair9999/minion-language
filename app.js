var myBtn = document.querySelector("#myButton")
var txtInput = document.querySelector("#txt-input")
var txtOutput = document.querySelector("#txt-output")

function fetchResult(){
  var url = "https://api.funtranslations.com/translate/minion.json?text="+txtInput.value
  console.log(url)
  fetch(url).then(response=>response.json()).then(json=>txtOutput.innerText=json.contents.translated)
  // console.log("Sharath", txtInput.value)
}
myBtn.addEventListener("click", fetchResult)