# HapiOnboardingApi.GetEnvelopeStatusApi

All URIs are relative to *https://hapi-ofccp-onboarding.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEnvelopeStatusRead**](GetEnvelopeStatusApi.md#getEnvelopeStatusRead) | **GET** /get_envelope_status/{envelope_id} | 



## getEnvelopeStatusRead

> getEnvelopeStatusRead(envelopeId)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.GetEnvelopeStatusApi();
let envelopeId = "envelopeId_example"; // String | 
apiInstance.getEnvelopeStatusRead(envelopeId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **envelopeId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

