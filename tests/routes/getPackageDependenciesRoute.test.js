var proxyquire = require('proxyquire');
var sinon = require('sinon');
var supertest = require('supertest');
var express = require('express');

describe('GET /ping', function () {
  var app, getDependenciesStub, request, route;

  beforeEach(function () {
    getDependenciesStub = sinon.stub();

    // Create an express application object
    app = express();

    // Get our router module, with a stubbed out users dependency
    // we stub this out so we can control the results returned by
    // the users module to ensure we execute all paths in our code
    route = proxyquire('../../src/routes/getPackageDependenciesRoute.js', {
      '/api': {
        getPackageDependenciesRoute: getDependenciesStub
      }
    });

    route(app);
    request = supertest(app);
  });

  it('should respond with a 404 and a null', function (done) {
    getDependenciesStub.returns(null);

    request
      .get('/api/expresssss')
      .expect('Content-Type', /json/)
      .expect(404, function (err, res) {
        expect(res.body).toEqual({
          status: 'not ok',
          data: null
        });
        done();
      });
  });

  it('should respond with 200 and a user object', function (done) {
    var data = {
      dependencies: {'nodejs': '2.1.2'}
    };

    getDependenciesStub.returns(data);

    request
      .get('/api/nodejs')
      .expect('Content-Type', /json/)
      .expect(200, function (err, res) {
        expect(res.body).toEqual({
          status: 'ok',
          data: data
        });
        done();
      });
  });
});
