# HapiOnboardingApi.JobboardbystateApi

All URIs are relative to *https://hapi-ofccp-onboarding.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listJobBoardByStateCode**](JobboardbystateApi.md#listJobBoardByStateCode) | **GET** /jobboards/{state_code}/ | List job board by state code, including credentials schema



## listJobBoardByStateCode

> BoardPublic listJobBoardByStateCode(stateCode, stateCode2)

List job board by state code, including credentials schema

 This endpoint lists the job board used for a given state including the schema for the required credentials. This endpoint is to be used to render the  jobboard credentials onboarding form 

### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.JobboardbystateApi();
let stateCode = "stateCode_example"; // String | 
let stateCode2 = "stateCode_example"; // String | 
apiInstance.listJobBoardByStateCode(stateCode, stateCode2, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stateCode** | **String**|  | 
 **stateCode2** | **String**|  | 

### Return type

[**BoardPublic**](BoardPublic.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

