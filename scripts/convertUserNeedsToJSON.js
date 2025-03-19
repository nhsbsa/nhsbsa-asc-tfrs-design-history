const fs = require("fs");
const path = require("path");
const csvParser = require("csv-parser");

const inputFilePath = path.join(__dirname, "../app/_data/userNeeds.csv");
const outputFilePath = path.join(__dirname, "../app/_data/userNeedstest.json");

const needsMap = {}; // Stores primary needs and their secondary needs
const primaryNeedsOrder = []; // Keeps track of primary need order

// Read the CSV file
fs.createReadStream(inputFilePath)
  .pipe(csvParser())
  .on("data", (row) => {
    const { id, title, "As a": as, "I need": need, "So that": so } = row;

    if (!id) return; // Skip empty rows

    const userNeed = {
      id: id.trim(),
      as: as.trim(),
      need: need.trim(),
      so: so.trim(),
    };

    // Primary need (has a title)
    if (title.trim()) {
      userNeed.title = title.trim();
      userNeed.secondaryNeeds = [];
      needsMap[userNeed.id] = userNeed;
      primaryNeedsOrder.push(userNeed.id); // Keep track of order
    } 
    // Secondary need (no title, belongs to a primary need)
    else {
      const primaryId = id.split(".")[0]; // Extract main user need ID
      if (needsMap[primaryId]) {
        needsMap[primaryId].secondaryNeeds.push(userNeed);
      } else {
        console.error(`Orphaned secondary need: ${id} (no matching primary need found)`);
      }
    }
  })
  .on("end", () => {
    // Convert map back to ordered array
    const jsonOutput = primaryNeedsOrder.map(id => needsMap[id]);

    // Write JSON output
    fs.writeFile(outputFilePath, JSON.stringify(jsonOutput, null, 2), "utf8", (err) => {
      if (err) {
        console.error("Error writing JSON file:", err);
      } else {
        console.log(`JSON file saved at: ${outputFilePath}`);
      }
    });
  })
  .on("error", (error) => {
    console.error("Error reading CSV file:", error);
  });

