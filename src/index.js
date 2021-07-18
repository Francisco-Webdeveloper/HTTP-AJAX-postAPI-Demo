const searchAlgoliaPlaces = (event) => {
  const url = "https://places-dsn.algolia.net/1/places/query"

  const queryJson = { query: event.currentTarget.value }
                    // whatever is written inside of the input. Ex: { query: 'lisboa' }

  // this queryJson.to_s. We transform an JS object into a string
  const bodyStrigified = JSON.stringify(queryJson);

  fetch(url, {
    method: "POST",
    body: bodyStrigified
  })
    .then(response => response.json())
    .then((data) => {
      // console.log(data);
      const city = data.hits[0].locale_names.default[0];
      console.log(city);

      const result = document.getElementById('result');
      result.innerText = city;
    });
};

const input = document.querySelector("#search");
input.addEventListener("keyup", searchAlgoliaPlaces);
