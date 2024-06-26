// 0-promise.js
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
      // Simulating an API call with a resolved Promise
      resolve("API response");
  });
}

export default getResponseFromAPI;
