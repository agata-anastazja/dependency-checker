const fetchData = require("./registry_api").fetchData

const getPackageDependencies = async (package_name = "express") => {
  const url = "https://registry.npmjs.org/" + package_name + "/latest"
  try {
    const reqBody = await fetchData(url)
    return reqBody["dependencies"];
  }
  catch(error) {
    console.error(error);
  };
};

module.exports = {getPackageDependencies}


