const products = require("./categorized.json");
const fn = require("./writeJsonToFile");

products.forEach((item) => {
  fn.writeJsonToFile(item, `./content/products/${item.productSlug}.json`);
});
