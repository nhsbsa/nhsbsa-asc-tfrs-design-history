const fs = require("fs");
const path = require("path");

// Path to the JSON file
const userNeedsFile = path.join(__dirname, "../app/_data/userNeeds.json");
const outputDir = path.join(__dirname, "../app/posts/userNeeds"); // Adjust the path to fit your structure

// Ensure directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read and parse userNeeds.json
const userNeeds = JSON.parse(fs.readFileSync(userNeedsFile, "utf8"));

// Generate Markdown files
userNeeds.forEach((need, index) => {
  const postNumber = index + 1;
  const filename = `user-need-${postNumber}.md`;
  const filePath = path.join(outputDir, filename);

  // Markdown content
  const content = `---
layout: user-need
title: ${need.title}
id: user-need-${postNumber}
---`;

  // Write the file
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Generated: ${filePath}`);
});

console.log("✅ User need posts generated!");
