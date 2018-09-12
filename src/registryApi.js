require('isomorphic-fetch')

const makeApiCall = async (url) => {
  const response = await fetch(url);
  const body = await response.json();
  if (response.status !== 200) {
    throw Error(response.message)
  };

  return body
};

module.exports = {makeApiCall}
