require('isomorphic-fetch')

const fetchData = async (url) => {  
  const body = {
    "dependencies": { 
      "accepts": "~1.3.5", 
    "array-flatten": "1.1.1", 
    "body-parser": "1.18.2"
    }
  };
  return body;
};

module.exports = {fetchData}