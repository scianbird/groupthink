// Polling code for potential later use but currently the server functions are doing the job! :
//
//
// const apiEndpoint = "http://localhost:8080/getsugs";
// const pollingInterval = 4000;

// async function refreshSuggsFromDatabase(apiEndpoint, pollingInterval) {
//   const fetchData = async () => {
//     try {
//       const response = await fetch(apiEndpoint);
//       const data = await response.json();

//       console.log("Latest suggs", data);
//       createSuggestionElements(data);

//       setTimeout(fetchData, pollingInterval);
//     } catch (error) {
//       console.error("Error fetching suggs", error);
//       setTimeout(fetchData, pollingInterval);
//     }
//   };
//   fetchData();
// }
