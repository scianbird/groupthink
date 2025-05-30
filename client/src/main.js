const suggestionForm = document.querySelector("#suggestionForm");

// note arrays from the database:cat table will need -1 to work correctly
let currentCategory = 1;
const updateDelay = 500;
const refreshDelay = 4000;
const dburl = "https://groupthink-server.onrender.com";

function handleSubmit(event) {
  event.preventDefault();
  const formSuggestion = new FormData(suggestionForm);
  const formSuggestions = Object.fromEntries(formSuggestion);

  // console.log("form data", formSuggestions);

  const reply = fetch(dburl + "/newsug", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formSuggestions),
  });
  // console.log(formSuggestions);
  setTimeout(renderSuggestions, updateDelay);
  suggestionForm.reset();
}

suggestionForm.addEventListener("submit", handleSubmit);

async function getCategoryList() {
  const res = await fetch(dburl + "/getcats");

  const cats = await res.json();
  // console.log(cats);
  return cats;
}

async function getSuggestions() {
  const res = await fetch(dburl + "/getsugs");

  const suggestions = await res.json();
  // console.log(suggestions);
  return suggestions;
}

function createSuggestionElements(suggestionArray) {
  const suggestionDiv = document.getElementById("suggestionList");

  // remove all children of the element holding the suggestions
  suggestionDiv.replaceChildren();

  let thisOnly = true;
  suggestionArray.forEach((item) => {
    if (thisOnly) {
      // console.log("JUST ONCE", item.suggestion_description);
      thisOnly = false;
      //get the Top
      const theWinner = document.getElementById("winnerTitle");
      theWinner.textContent = `We're thinking: ${item.suggestion_description} (with ${item.suggestion_score} votes)`;
    } else {
      // console.log("All The Rest", item.suggestion_description);

      // create the elements
      const userSug = document.createElement("p");
      const userScore = document.createElement("span");
      const voteButton = document.createElement("button");

      // update the elements
      userSug.textContent = item.suggestion_description;
      userScore.textContent = item.suggestion_score;
      userSug.className = "userSug";
      userScore.className = "userScore";

      // TODO: This can be removed once the CSS is added for the vote buttons
      voteButton.textContent = "+";

      voteButton.id = parseInt(item.id);
      voteButton.addEventListener("click", voteButtonHandler);
      voteButton.className = "voteButton";

      // append the elements
      suggestionDiv.appendChild(userSug);
      suggestionDiv.appendChild(userScore);
      suggestionDiv.appendChild(voteButton);
    }
  });
}

// this function is called by any of the suggestions in the list
// we extract the id of the suggestion from the event and use it to call the server
// with this id to update the database.
function voteButtonHandler(event) {
  const idx = parseInt(event.target.id);
  const voteData = { currentCategory: currentCategory, suggestionID: idx };

  fetch(dburl + "/newvote", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(voteData),
  });

  setTimeout(renderSuggestions, updateDelay);
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
  setInterval(() => {
    renderSuggestions();
  }, refreshDelay);
});

const setTheme = (theme) => (document.documentElement.className = theme);
document.getElementById("theme-select").addEventListener("change", function () {
  setTheme(this.value);
});
