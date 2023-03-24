const fn = require("./writeJsonToFile");

fetch(
  "https://www.businessenvelopes.com/api/v1/endoc/product?secret=a6718dd7-2a89-485b-8ac1-51ff87b9c704&page=1&pageSize=10000"
)
  .then((response) => response.json())
  .then((data) => {
    fn.writeJsonToFile(data, "./migration/db.json");
  })
  .catch((error) => console.error(error));
