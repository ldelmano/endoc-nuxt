const db = require("./db.json");
const cats = require("./categories.json");
const fn = require("./writeJsonToFile");

function updateCategorySlugs(products, categories) {
  const categoryReplacements = {};
  categories.forEach((category) => {
    const categoryName = Object.keys(category)[0];
    const categoryData = category[categoryName];
    categoryReplacements[categoryName] = categoryData.replaceBy;
  });

  return products.map((product) => {
    const newCategorySlugs = product.categorySlugs
      .filter(
        (categorySlug) =>
          categorySlug.includes("-") && categoryReplacements[categorySlug]
      )
      .map((categorySlug) => categoryReplacements[categorySlug]);

    return {
      ...product,
      categorySlugs: [...new Set(newCategorySlugs)],
    };
  });
}

const categorized = updateCategorySlugs(db.products, cats);

fn.writeJsonToFile(categorized, "./migration/categorized.json");
