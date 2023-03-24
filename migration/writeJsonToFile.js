const fs = require("fs");

function writeJsonToFile(jsonContent, filePath) {
  // Convert JSON object to string
  const jsonString = JSON.stringify(jsonContent);

  // Write JSON string to file
  fs.writeFileSync(filePath, jsonString);

  console.log(`JSON content written to file: ${filePath}`);
}

module.exports = {
  writeJsonToFile,
};
