/**
 * HAPI Onboarding API
 * Simple API for handling employer onboarding
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

// CommonJS-like environments that support module.exports, like Node.
factory(require('expect.js'), require(process.cwd()+'/src/index'));

'use strict';

var instance;

beforeEach(function() {
  instance = new HapiOnboardingApi.TransactionsApi();
});

var getProperty = function(object, getter, property) {
  // Use getter method if present; otherwise, get the property directly.
  if (typeof object[getter] === 'function')
    return object[getter]();
  else
    return object[property];
}

var setProperty = function(object, setter, property, value) {
  // Use setter method if present; otherwise, set the property directly.
  if (typeof object[setter] === 'function')
    object[setter](value);
  else
    object[property] = value;
}

describe('TransactionsApi', function() {
    describe('transactionsCreate', function() {
      it('should call transactionsCreate successfully', function(done) {
        //uncomment below and update the code to test transactionsCreate
        //instance.transactionsCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('transactionsRead', function() {
      it('should call transactionsRead successfully', function(done) {
        //uncomment below and update the code to test transactionsRead
        //instance.transactionsRead(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
});