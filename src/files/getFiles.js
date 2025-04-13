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
  return path.join(os.homedir(), "Documents", "cs2450vm", "programs");
}

function getHomeDirectory() {
  const homeDir = os.homedir();
  return homeDir;
}

/**
 * Ensures that the given directory exists. If it doesn't, create it.
 */
function ensureDirectoryExists(directoryPath) {
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });

    // Option 2: Create sample files with hardcoded content
    const sampleFiles = {
      "test1.txt": `+1007
+4300`,
      "test2.txt": `+1009
+1010
+2009
+3110
+4107
+1109
+4300
+1110
+4300
+0000
+0000
-99999`,
    };

    for (const [fileName, content] of Object.entries(sampleFiles)) {
      try {
        fs.writeFileSync(path.join(directoryPath, fileName), content);
        console.log(`Created sample file: ${fileName}`);
      } catch (error) {
        console.error(`Error creating ${fileName}:`, error);
      }
    }
    // Copy sample files from the project's programs directory
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
