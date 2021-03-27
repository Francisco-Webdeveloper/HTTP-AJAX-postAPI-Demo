const searchAlgoliaPlaces = (event) => {
  const url = "https://places-dsn.algolia.net/1/places/query"
  
  const queryJson = { query: event.currentTarget.value }
  
  // this queryJson.to_s
  const bodyStrigified = JSON.stringify(queryJson);
  
  fetch(url, {
    method: "POST",
    body: bodyStrigified
  })
    .then(response => response.json())
    .then((data) => {
      const city = data.hits[0].locale_names.default[0];
      console.log(city);

      const result = document.getElementById('result');
      result.innerText = city;
    });
};

const input = document.querySelector("#search");
input.addEventListener("keyup", searchAlgoliaPlaces);
