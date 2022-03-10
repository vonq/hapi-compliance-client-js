# HapiOnboardingApi.TiersApi

All URIs are relative to *https://hapi-ofccp-onboarding.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tiersList**](TiersApi.md#tiersList) | **GET** /tiers/ | 



## tiersList

> [Tier] tiersList()



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.TiersApi();
apiInstance.tiersList((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Tier]**](Tier.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

