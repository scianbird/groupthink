const suggestionForm = document.querySelector("#suggestionForm");

function handleSumbit(event) {
  event.preventDefault();

  const formSuggestion = new formSuggestion(suggestionForm);
  const formSuggestions = Object.fromEntries(formSuggestions);

  fetch("http://localhost:8080/newsug", {
    method: "POST",
    body: JSON.stringify(formSuggestions),
    header: {
      "Content-Type": "application/json",
    },
  });
  console.log(formSuggestions);
}

handleSumbit();
