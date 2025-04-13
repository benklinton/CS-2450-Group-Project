const fs = require("fs");

function loadFile(filePath) {
  try {
    // Read file contents as a UTF-8 string
    const content = fs.readFileSync(filePath, "utf8");
    // Normalize Windows line endings (\r\n) to Unix-style (\n)
    let normalized = content.replace(/\r\n/g, "\n");
    normalized = convertFourToSix(normalized);
    return normalized;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}

function convertFourToSix(fileContents) {
  // Convert all four digit words in a file to six digit words
  let indices = [];
  let convertedFileContents = "" + fileContents;

  // Identify words by plus symbols
  for (let i=0; i<fileContents.length; i++) {
    if (fileContents[i] === '+') indices.push(i);
  }

  // If word is four digits, add trailing 0 to opcode and trailing 0 to operand
  // Loop through indices in reverse order to not mess up positions after adding digits
  for (let i=indices.length-1; i>=0; i--) {
    if (indices[i]+5 >= fileContents.length || fileContents[indices[i]+5] === '\n') {
      convertedFileContents = convertedFileContents.slice(0, indices[i]) + "+0" + convertedFileContents.slice(indices[i]+1, indices[i]+3) + "0" + convertedFileContents.slice(indices[i]+3, indices[i]+5) + convertedFileContents.slice(indices[i]+5);
    }
  }

  return convertedFileContents
}

module.exports = { loadFile };
