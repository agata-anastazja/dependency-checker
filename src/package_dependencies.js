const getPackageDependencies = async (package_name, registryApi) => {
  const url = "https://registry.npmjs.org/" + package_name + "/latest"
  try {
    const reqBody = await registryApi(url)
    return reqBody["dependencies"];
  }
  catch(error) {
    console.error(error);
  };
};

module.exports = {getPackageDependencies}


