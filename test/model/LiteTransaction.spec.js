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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HapiOnboardingApi);
  }
}(this, function(expect, HapiOnboardingApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HapiOnboardingApi.LiteTransaction();
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

  describe('LiteTransaction', function() {
    it('should create an instance of LiteTransaction', function() {
      // uncomment below and update the code to test LiteTransaction
      //var instance = new HapiOnboardingApi.LiteTransaction();
      //expect(instance).to.be.a(HapiOnboardingApi.LiteTransaction);
    });

    it('should have the property transactionId (base name: "transaction_id")', function() {
      // uncomment below and update the code to test the property transactionId
      //var instance = new HapiOnboardingApi.LiteTransaction();
      //expect(instance).to.be();
    });

    it('should have the property transactionType (base name: "transaction_type")', function() {
      // uncomment below and update the code to test the property transactionType
      //var instance = new HapiOnboardingApi.LiteTransaction();
      //expect(instance).to.be();
    });

    it('should have the property transactionTimestamp (base name: "transaction_timestamp")', function() {
      // uncomment below and update the code to test the property transactionTimestamp
      //var instance = new HapiOnboardingApi.LiteTransaction();
      //expect(instance).to.be();
    });

    it('should have the property distributionType (base name: "distribution_type")', function() {
      // uncomment below and update the code to test the property distributionType
      //var instance = new HapiOnboardingApi.LiteTransaction();
      //expect(instance).to.be();
    });

    it('should have the property channel (base name: "channel")', function() {
      // uncomment below and update the code to test the property channel
      //var instance = new HapiOnboardingApi.LiteTransaction();
      //expect(instance).to.be();
    });

    it('should have the property confirmationId (base name: "confirmation_id")', function() {
      // uncomment below and update the code to test the property confirmationId
      //var instance = new HapiOnboardingApi.LiteTransaction();
      //expect(instance).to.be();
    });

  });

}));
