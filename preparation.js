const { writeFile, write } = require('fs');
const en = require('./enGB.json');
const ja = require('./jaJP.json');

const table = [
  ...new Map(
    ja.strings
      .filter((v) => {
        if (v.Value.length > 30 || v.Value === '') {
          return false;
        }
        return !/(^「.+」$|\{.+\})/.test(v.Value);
      })
      .map((v, i) => {
        return {
          en: en.strings.find((e) => {
            return v.Key === e.Key;
          }).Value,
          ja: v.Value,
        };
      })
      .map((v) => {
        return [v.ja, v];
      })
  ).values(),
];

writeFile('table.json', JSON.stringify(table), () => {});
