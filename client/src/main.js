const suggestionForm = document.querySelector("#suggestionForm");

// note arrays from the database:cat table will need -1 to work correctly
let currentCategory = 1;

function handleSubmit(event) {
  event.preventDefault();
  const formSuggestion = new FormData(suggestionForm);
  const formSuggestions = Object.fromEntries(formSuggestion);

  console.log("form data", formSuggestions);

  const reply = fetch("http://localhost:8080/newsug", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formSuggestions),
  });
  console.log(formSuggestions);
}

suggestionForm.addEventListener("submit", handleSubmit);

async function getCategoryList() {
  const res = await fetch("http://localhost:8080/getcats");

  const cats = await res.json();
  // console.log(cats);
  return cats;
}

async function getSuggestions() {
  const res = await fetch("http://localhost:8080/getsugs");

  const suggestions = await res.json();
  // console.log(suggestions);
  return suggestions;
}

function createSuggestionElements(suggestionArray) {
  const suggestionDiv = document.getElementById("suggestionList");

  // remove all children of the element holding the suggestions
  suggestionDiv.replaceChildren();

  suggestionArray.forEach((item) => {
    // create the elements
    const userSug = document.createElement("p");
    const userScore = document.createElement("p");
    const voteButton = document.createElement("button");

    // update the elements
    userSug.textContent = item.suggestion_description;
    userScore.textContent = item.suggestion_score;

    //TODO: I expect this will be sorted in CSS if so this can/should be removed!
    voteButton.textContent = "+";

    voteButton.id = parseInt(item.id);
    voteButton.addEventListener("click", voteButtonHandler);

    // append the elements
    suggestionDiv.appendChild(userSug);
    suggestionDiv.appendChild(userScore);
    suggestionDiv.appendChild(voteButton);
  });
}

// this function is called by any of the suggestions in the list
// we extract the id of the suggestion from the event and use it to call the server
// with this id to update the database.
function voteButtonHandler(event) {
  const idx = parseInt(event.target.id);
  console.log("got vote button for index:", idx);
  //TODO: add route to server to increase the vote for suggestion with given index
  //TODO: call that route from here
  //TODO: call renderSuggestions in 1 second so this client can see the update sooner than waiting for the regular refresh.
}

//TODO: this will need to be altered when/if we have more than one category.
function createCategoryElements(suggestionArray, currentCat) {
  const suggestionDiv = document.getElementById("suggestionList");

  // for now we just need the Title and description
  const catTitleElement = document.getElementById("currentCatTitle");
  const catDescrElement = document.getElementById("currentCatDiscr");

  catTitleElement.textContent = suggestionArray[currentCat - 1].category_title;
  catDescrElement.textContent =
    suggestionArray[currentCat - 1].category_description;
}

async function renderSuggestions() {
  const suggestionsArray = await getSuggestions();
  // console.log("renderSuggestions:", suggestionsArray);
  createSuggestionElements(suggestionsArray);
}

async function renderCategory() {
  const categoryArray = await getCategoryList();
  // console.log("renderCats:", categoryArray);
  createCategoryElements(categoryArray, currentCategory);
}

document.addEventListener("DOMContentLoaded", () => {
  // setting a default here, later expect retrieve last value from local storage
  currentCategory = 1;

  // initial display of the database table data
  renderSuggestions();
  renderCategory();
  //TODO: start the regular suggestions update
});
