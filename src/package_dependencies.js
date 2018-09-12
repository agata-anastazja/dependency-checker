const getPackageDependencies = async (package_name, registryApi) => {
  const url = "https://registry.npmjs.org/" + package_name + "/latest"
  try {
    const reqBody = await registryApi(url)
    const response = reqBody["dependencies"];
    if(response == undefined) throw(reqBody)
    return response;
  }
  catch(error) {
    
    console.error(error);
    throw(error)
  };
};

module.exports = {getPackageDependencies}


