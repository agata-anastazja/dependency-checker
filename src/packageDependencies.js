const getPackageDependencies = async (registryApi, package_name) => {
  const url = "https://registry.npmjs.org/" + package_name + "/latest"
  const reqBody = await registryApi(url)
  const response = reqBody["dependencies"];
  if(response == undefined) throw(reqBody)
  return response;
};


module.exports = {getPackageDependencies}
