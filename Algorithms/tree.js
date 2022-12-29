const fs = require("fs");

let lineOfCodes = 0;

function readFile(fileName) {
  const file = fs
    .readFileSync(fileName)
    .toString()
    .split("\n")
    .filter((text) => text !== "");
  lineOfCodes += file.length;
}

const folder = "/Users/joannakang/Projects";

function checkFileType(fileEntry) {
  if (fileEntry.name == "node_modules") {
    return "notCode";
  }

  if (fileEntry.isDirectory()) {
    return "dir";
  }

  if (fileEntry.name.endsWith(".ts") || fileEntry.name.endsWith(".js")) {
    return "code";
  }

  return "notCode";
}

function traverseFileTree(folder) {
  //console.log(folder);
  const files = fs.readdirSync(folder, { withFileTypes: true });

  if (files.length > 0) {
    files.forEach((file) => {
      const fileType = checkFileType(file);
      if (fileType === "dir") {
        const newDir = folder + "/" + file.name;
        //console.log("directory: ", newDir);
        return traverseFileTree(newDir, file.name);
      } else if (fileType === "code") {
        //console.log("code: ", file);
        return readFile(folder + "/" + file.name);
      }
    });
  }
}

traverseFileTree(folder);
console.log(lineOfCodes);
