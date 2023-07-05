(function () {
  let content = document.querySelector("#content");
  let input = document.querySelector("input");
  let btn = document.querySelector(".btn");

  let savedText = window.localStorage.getItem("text");

  input.value = savedText;

  content.innerHTML = savedText;

  btn.addEventListener("click", () => {
    let input_content = input.value;
    window.localStorage.setItem("text", input_content);
    content.innerHTML = input_content;
    let speech = new SpeechSynthesisUtterance(input_content);
    speechSynthesis.speak(speech);
    let input_words = input.value.length;
    if (input_words <= 4) {
      content.style.overflowY = "scroll";
      content.style.minWidth = "22rem";
      content.style.maxWidth = "30rem";
      content.style.fontSize = "1.1rem";
      content.style.padding = "1rem";
    }
  });
})();
