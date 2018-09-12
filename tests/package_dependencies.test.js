const getPackageDependencies = require('../src/packageDependencies').getPackageDependencies;
const fakeRegistryApi = require("./fakes/fakeRegistryApi").fetchData;
describe('Package dependencies', () => {

  it('gets dependencies from npm registry', async () => {
    dependencies = {
      "accepts": "~1.3.5",
      "array-flatten": "1.1.1",
      "body-parser": "1.18.2"
    };
    fakeData = { dependencies };

    const result = await getPackageDependencies(fakeRegistryApi, "express")
    expect(result).toEqual(dependencies);
  });

});
