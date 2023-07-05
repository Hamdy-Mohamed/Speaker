(function () {
  let content = document.querySelector("#content");
  let input = document.querySelector("input");

  window.addEventListener("change", () => {
    input_content = input.value;
    content.innerHTML = input_content;
    let speech = new SpeechSynthesisUtterance(input_content);
    speechSynthesis.speak(speech);
    input_words = input.value.length;
    if (input_words <= 4) {
      content.style.overflowY = "scroll";
      content.style.minWidth = "22rem";
      content.style.maxWidth = "30rem";
      content.style.fontSize = "1.1rem";
      content.style.padding = "1rem";
    }
  });
})();
