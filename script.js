let words = {
    hola: ["Juan", "Maria", "Pedro"],
    monitor: ["hd", "gamer", "144hz"],
    animal: ["planet", "crossing", "con c"],
    mouse: ["pad", "gamer", "logitech"],
    televisor: ["tcl", "samsung", "lg"],
    el: ["alfa", "nacional", "principito"],
    lamborghini: ["urus", "veneno", "diablo"],
    tesla: ["model s", "model 3", "cybertruck"],
    tennis: ["nike", "pumas", "jordan"],
    xbox: ["game pass", "one", "live"],
    platzi: ["cursos", "day", "jobs"],
    javascript: ["fullStack", "frontend", "backend"],
    computadora: ["hp","lenovo","dell"]
  };
  
  let timerId;
  
  function suggestWords() {
    words = JSON.parse(localStorage.getItem('storage'))
    const textArea = document.getElementById("text-area");
    const currentText = textArea.value.trim();
    const lastWord = currentText.split(" ").pop().toLowerCase();
  
    if (lastWord.length >= 2 && lastWord in words) {
      const suggestedWords = words[lastWord];
      const suggestedWordsDiv = document.getElementById("suggested-words");
  
      suggestedWordsDiv.innerHTML = "";
      for (let i = 0; i < suggestedWords.length; i++) {
        const word = suggestedWords[i];
        const button = document.createElement("button");
        button.classList.add('sugerencias')
        button.innerText = word;
        button.onclick = () => {
          textArea.value += " " + word;
          suggestedWordsDiv.innerHTML = "";
        };
        suggestedWordsDiv.appendChild(button);
      }
    } else {
      document.getElementById("suggested-words").innerHTML = "";
    }
  }
  
  function addCharacter(character) {
    const textArea = document.getElementById("text-area");
    textArea.value += character;
    textArea.focus();
    setTimeout(suggestWords,1000)
    timerId = setTimeout(suggestWords, 1000);
  }
  
  document.getElementById("text-area").addEventListener("keyup", () => {
    setTimeout(suggestWords,1000)
    timerId = setTimeout(suggestWords, 1000);
  });
  
  /*funcion agregar palabras al knowledge BASE */

  const principal = document.querySelector('#text-area-principal');
  const secundaria1 = document.querySelector('#text-area-secundaria-1');
  const secundaria2 = document.querySelector('#text-area-secundaria-2');
  const secundaria3 = document.querySelector('#text-area-secundaria-3');
  const storageButton = document.querySelector('.button-storage');

  storageButton.addEventListener("click",(e)=>{
    e.preventDefault()
    if(principal.value != '' && secundaria1.value != '' && secundaria2.value != '' && secundaria3.value != ''){
      prin= principal.value;
      let sec1 = secundaria1.value;
      let sec2 = secundaria2.value;
      let sec3 = secundaria3.value;

      words[prin]=[sec1,sec2,sec3]

      principal.value=''
      secundaria1.value=''
      secundaria2.value=''
      secundaria3.value=''

      localStorage.setItem("storage",JSON.stringify(words))
      
      
      alert("Sus datos se han guardado de manera satisfactoria!!")
    }else{
      alert("Necesita tener almenos 1 palabra principal y 3 secundarias")
    }
  })