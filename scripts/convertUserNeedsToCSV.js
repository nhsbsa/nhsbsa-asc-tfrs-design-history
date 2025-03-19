const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "../app/_data/userNeeds.json");
const outputFilePath = path.join(__dirname, "../app/_data/userNeeds.csv");

// Read the JSON file
fs.readFile(inputFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    if (!Array.isArray(jsonData)) {
      console.error("JSON should contain an array of user needs.");
      return;
    }

    // Define CSV headers
    const headers = ["id", "title", "As a", "I need", "So that"];
    const csvRows = [headers.join(",")]; // Add header row

    // Function to format a row
    const formatRow = (need, isSecondary = false) => {
      return [
        need.id || "",
        isSecondary ? "" : (need.title || ""), // Only primary needs have a title
        need.as || "",
        need.need || "",
        need.so || ""
      ].map(value => `"${value}"`).join(",");
    };

    // Process each primary need
    jsonData.forEach(primaryNeed => {
      csvRows.push(formatRow(primaryNeed, false));

      // Process secondary needs, placing them under the primary need
      if (Array.isArray(primaryNeed.secondaryNeeds)) {
        primaryNeed.secondaryNeeds.forEach(secondaryNeed => {
          csvRows.push(formatRow(secondaryNeed, true));
        });
      }
    });

    // Write CSV output
    fs.writeFile(outputFilePath, csvRows.join("\n"), "utf8", (err) => {
      if (err) {
        console.error("Error writing CSV file:", err);
      } else {
        console.log(`CSV file saved at: ${outputFilePath}`);
      }
    });

  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
});

