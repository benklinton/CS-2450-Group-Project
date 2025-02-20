const { exec } = require("child_process");

function openFolder(folderPath) {
  let command;
  switch (process.platform) {
    case "win32":
      // On Windows, use start command.
      command = `start "" "${folderPath}"`;
      break;
    case "darwin":
      // On macOS, use open command.
      command = `open "${folderPath}"`;
      break;
    case "linux":
      // On Linux, use xdg-open.
      command = `xdg-open "${folderPath}"`;
      break;
    default:
      console.error("Platform not supported for opening folders.");
      return;
  }

  exec(command, (error) => {
    if (error) {
      console.error("Error opening folder:", error);
    }
  });
}

module.exports = { openFolder };
