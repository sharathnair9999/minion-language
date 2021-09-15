var myBtn = document.querySelector("#myButton")
var txtInput = document.querySelector("#txt-input")
var txtOutput = document.querySelector("#txt-output")

function errorHandler(error){
  alert("Uh..Oh!! Something didn't work as it should", error)
}

function fetchResult(){
  var url = "https://api.funtranslations.com/translate/minion.json?text="+txtInput.value
  console.log(url)
  fetch(url).then(response=>response.json()).then(json=>txtOutput.innerText=json.contents.translated).catch((errorHandler))
  // console.log("Sharath", txtInput.value)
}
myBtn.addEventListener("click", fetchResult)