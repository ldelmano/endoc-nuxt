const fn = require("./writeJsonToFile");
const db = require("./db.json");

const categories = [];
db.products.forEach((item) => {
  item.categorySlugs.forEach((category) => {
    if (!categories.includes(category)) categories.push(category);
  });
});

const filteredCategories = categories.filter((cat) => /\d\//.test(cat));
const categoryObjects = filteredCategories.map((cat) => ({
  [cat]: { replaceBy: cat.replace(/\d\//, "") },
}));

fn.writeJsonToFile(categoryObjects, "./migration/categories.json");
