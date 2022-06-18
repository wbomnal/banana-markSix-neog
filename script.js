let btnTranslate = document.getElementById("btn-translate");
let inputTxt = document.getElementById("input-txt");
let translatedTxt = document.getElementById("translated-txt"); 

let url ="https://api.funtranslations.com/translate/minion.json"

function testText(test)
  { 
    return url + "?"+ "text=" + test
  }

btnTranslate.addEventListener("click",function(){
  let textInput = inputTxt.value
  fetch(testText(textInput))
  .then(response => response.json())
  .then(json => {
    let output = json.contents.translated
    translatedTxt.innerText= output
  }
    )
}
)

  








