const fs = require("fs");

function loadFile(filePath) {
  try {
    // Read file contents as a UTF-8 string
    const content = fs.readFileSync(filePath, "utf8");
    // Normalize Windows line endings (\r\n) to Unix-style (\n)
    const normalized = content.replace(/\r\n/g, "\n");
    return normalized;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}

module.exports = { loadFile };
