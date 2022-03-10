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
    instance = new HapiOnboardingApi.Vacancy();
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

  describe('Vacancy', function() {
    it('should create an instance of Vacancy', function() {
      // uncomment below and update the code to test Vacancy
      //var instance = new HapiOnboardingApi.Vacancy();
      //expect(instance).to.be.a(HapiOnboardingApi.Vacancy);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new HapiOnboardingApi.Vacancy();
      //expect(instance).to.be();
    });

    it('should have the property transactions (base name: "transactions")', function() {
      // uncomment below and update the code to test the property transactions
      //var instance = new HapiOnboardingApi.Vacancy();
      //expect(instance).to.be();
    });

    it('should have the property reqNumber (base name: "req_number")', function() {
      // uncomment below and update the code to test the property reqNumber
      //var instance = new HapiOnboardingApi.Vacancy();
      //expect(instance).to.be();
    });

    it('should have the property companyName (base name: "company_name")', function() {
      // uncomment below and update the code to test the property companyName
      //var instance = new HapiOnboardingApi.Vacancy();
      //expect(instance).to.be();
    });

    it('should have the property jobLocation (base name: "job_location")', function() {
      // uncomment below and update the code to test the property jobLocation
      //var instance = new HapiOnboardingApi.Vacancy();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new HapiOnboardingApi.Vacancy();
      //expect(instance).to.be();
    });

    it('should have the property jobTitle (base name: "job_title")', function() {
      // uncomment below and update the code to test the property jobTitle
      //var instance = new HapiOnboardingApi.Vacancy();
      //expect(instance).to.be();
    });

    it('should have the property applyUrl (base name: "apply_url")', function() {
      // uncomment below and update the code to test the property applyUrl
      //var instance = new HapiOnboardingApi.Vacancy();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instance = new HapiOnboardingApi.Vacancy();
      //expect(instance).to.be();
    });

  });

}));
