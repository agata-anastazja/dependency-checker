const getPackageDependencies = require('../src/package_dependencies').getPackageDependencies;

describe('asyncFetch', () => {

  beforeEach(() => {
    fetch.resetMocks()
  })

  it('gets dependencies from npm registry', async () => {
    dependencies = { 
      "accepts": "~1.3.5", 
      "array-flatten": "1.1.1", 
      "body-parser": "1.18.2"
    };
    fakeData = { dependencies };

    fetch.mockResponseOnce(JSON.stringify(fakeData))

    const result = await getPackageDependencies("express")
    expect(result).toEqual(dependencies);
    expect(fetch).toBeCalledWith("https://registry.npmjs.org/express/latest")
  });
});

