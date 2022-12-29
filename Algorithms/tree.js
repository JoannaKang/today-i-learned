const fs = require("fs");

function readFile(fileName) {
  const file = fs
    .readFileSync(fileName)
    .toString()
    .split("\n")
    .filter((text) => text !== "");

  return file.length;
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

// Depth First Search
function DFSTree(folder) {
  //console.log(folder);
  let lineOfCode = 0;
  const files = fs.readdirSync(folder, { withFileTypes: true });

  files.forEach((file) => {
    const fileType = checkFileType(file);
    if (fileType === "dir") {
      const newDir = folder + "/" + file.name;
      lineOfCode += DFSTree(newDir);
    } else if (fileType === "code") {
      lineOfCode += readFile(folder + "/" + file.name);
    }
  });
  return lineOfCode;
}

console.log(DFSTree(folder));

// Breadth First Search
function BFSTree(folder) {
  let lineOfCode = 0;
  const files = fs.readdirSync(folder, { withFileTypes: true });

  files.forEach((file) => {
    const fileType = checkFileType(file);
    if (fileType === "code") {
      lineOfCode += readFile(folder + "/" + file.name);
    }
  });

  files.forEach((file) => {
    const fileType = checkFileType(file);
    if (fileType === "dir") {
      lineOfCode += BFSTree(folder + "/" + file.name);
    }
  });
  return lineOfCode;
}

console.log(BFSTree(folder));
