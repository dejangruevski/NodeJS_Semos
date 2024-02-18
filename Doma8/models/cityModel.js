const fs = require('fs');

const DATA_SOURCE = `${__dirname}/../citiesArray.json`;

const readFile = async () => {
  return new Promise((success, fail) => {
    fs.readFile(DATA_SOURCE, 'utf8', (err, data) => {
      if (err) {
        return fail(err);
      }
      return success(data);
    });
  });
};

const writeFile = async (data) => {
  return new Promise((success, fail) => {
    fs.writeFile(DATA_SOURCE, data, (err) => {
      if (err) {
        return fail(err);
      }
      return success();
    });
  });
};

exports.list = async () => {
  const file = await readFile();
  const fileData = JSON.parse(file);
  return fileData;
};

exports.add = async (data) => {
  const file = await readFile();
  const fileData = JSON.parse(file);
  fileData.push(data);
  await writeFile(JSON.stringify(fileData));
};

exports.remove = async (number) => {
  const file = await readFile();
  const fileData = JSON.parse(file);
  // const newFileData = fileData.filter((_, index) => index !== number);
  const newFileData = fileData.splice(number, 1);
  await writeFile(JSON.stringify(newFileData));
};