const fs = require("fs");
const path = require("path");
const os = require("os");

/**
 * Determines the default programs folder depending on the OS.
 *
 * For Windows, it tries:
 *   - "C:\Program Files\cs2450vm\programs"
 *   - "C:\Program Files (x86)\cs2450vm\programs"
 * and falls back to the user's Documents folder if not found.
 *
 * For macOS/Linux, it uses:
 *   ~/Documents/cs2450vm/programs
 */
function getDefaultProgramPath() {
  // For now, using Documents folder for both platforms.
  return path.join(__dirname, "..", "..", "programs");
}

/**
 * Ensures that the given directory exists. If it doesn't, create it.
 */
function ensureDirectoryExists(directoryPath) {
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }
}

/**
 * Reads the names of all files (not subdirectories) in the chosen directory.
 * Defaults to the programs folder.
 */
function getFilesFromProgramFolder(chosenDirectory = null) {
  const directoryPath = chosenDirectory || getDefaultProgramPath();
  ensureDirectoryExists(directoryPath);
  //console.log(`Using directory: ${directoryPath}, chosen: ${chosenDirectory}`);
  try {
    const items = fs.readdirSync(directoryPath);
    const files = items.filter((item) => {
      const fullPath = path.join(directoryPath, item);
      return fs.statSync(fullPath).isFile();
    });
    return files;
  } catch (error) {
    console.error(`Error reading directory ${directoryPath}:`, error);
    return [];
  }
}

module.exports = { getFilesFromProgramFolder, getDefaultProgramPath };
