const getPackageDependencies = async (registryApi, package_name) => {
  const url = "https://registry.npmjs.org/" + package_name + "/latest"
  try {
    const reqBody = await registryApi(url)
    return reqBody["dependencies"];
  }
  catch(error) {
    throw(error);
  };
};


module.exports = {getPackageDependencies}
