'use strict';

const countTypesInArray = (ArrayOfTypes) => {
  const countTypes = {};
  for (const item of ArrayOfTypes) {
    const type = typeof item;
    let count = countTypes[type];
    count = count ? count++ : count = 0;
    countTypes[type] = count;
  };

  return countTypes;
};

module.exports = { countTypesInArray };
