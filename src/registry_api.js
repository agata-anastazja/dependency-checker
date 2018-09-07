require('isomorphic-fetch')

const fetchData = async (url) => {  
  const response = await fetch(url);
  const body = await response.json();
  if (response.status !== 200) throw Error(response.message);
  return body
};

module.exports = {fetchData}
