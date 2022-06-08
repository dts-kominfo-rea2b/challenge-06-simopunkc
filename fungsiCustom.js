// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const createPromise = (file, format) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (error, data) => {
      if (error) {
        reject(error)
      }
      resolve(format(data))
    })
  })
}

const format1 = (data) => {
  return JSON.parse(data).message.split(" ")[1]
}

const format2 = (data) => {
  return JSON.parse(data)[0].message.split(" ")[1]
}

const format3 = (data) => {
  return JSON.parse(data)[0].data.message.split(" ")[1]
}

const bacaData = async (callback) => {
  try {
    let result = await Promise.all([
      createPromise(file1, format1),
      createPromise(file2, format2),
      createPromise(file3, format3)
    ]).then((v) => v)
    return callback(null, result)
  } catch (err) {
    return callback(err, null)
  }
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
