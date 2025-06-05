const fs = require("fs");
const path_ = require("path");

const readStreamFile = (...path) => {
  const filename = path.pop();
  if (fs.existsSync(path_.join(__dirname, ...path))) {
    return fs.createReadStream(
      path_.join(__dirname, ...path, filename)
    );
  }
};

const readFile = (...path) => {
  const filename = path.pop();
  if (fs.existsSync(path_.join(__dirname, ...path))) {
    return fs.readFileSync(
      path_.join(__dirname, ...path, filename)
    );
  }
};

const getPathFile = (...path) => {
  const filename = path.pop();
  if (fs.existsSync(path_.join(__dirname, ...path))) {
    return path_.join(__dirname, ...path, filename);
  }
};

const deleteFile = async (...path) => {
  const filename = path.pop();
  if (fs.existsSync(path_.join(__dirname, ...path, filename))) {
    await fs.unlinkSync(path_.join(__dirname, ...path, filename));
  }
};

const writeFile = (...path) => {
  const data = path.pop();
  const filename = path.pop();
  if (!fs.existsSync(path_.join(__dirname, ...path))) {
    createFile(...path, filename);
  }
  return fs.writeFileSync(
    path_.join(__dirname, ...path, filename),
    data
  );
};

const createFile = (...path) => {
  const filename = path.pop();
  if (!fs.existsSync(path_.join(__dirname, ...path))) {
    fs.mkdirSync(path_.join(__dirname, ...path), { recursive: true });
  }
  return fs.createWriteStream(
    path_.join(__dirname, ...path, filename)
  );
};

const appendToFile = (...path) => {
  const data = path.pop();
  const filename = path.pop();
  if (!fs.existsSync(path_.join(__dirname, ...path))) {
    createFile(...path, filename);
  }
  return fs.appendFileSync(
    path_.join(__dirname, ...path, filename),
    data
  );
};

module.exports = {
  createFile,
  appendToFile,
  writeFile,
  readFile,
  readStreamFile,
  getPathFile,
  deleteFile,
};
