function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generate(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instruction");

  let apiKey = "145accf56t60a1d841af0e9efb3o9b32";
  let prompt = `User instructions: Generate a English poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic Poem expert and love to write short poems. You're mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a English poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemForm = document.querySelector("#form");
poemForm.addEventListener("submit", generate);
