# HapiOnboardingApi.VacanciesApi

All URIs are relative to *https://hapi-ofccp-onboarding.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vacanciesList**](VacanciesApi.md#vacanciesList) | **GET** /vacancies/{company_id}/ | 
[**vacanciesRead**](VacanciesApi.md#vacanciesRead) | **GET** /vacancies/{company_id}/{id}/ | 



## vacanciesList

> [Vacancy] vacanciesList(companyId)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.VacanciesApi();
let companyId = "companyId_example"; // String | 
apiInstance.vacanciesList(companyId, (error, data, response) => {
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
 **companyId** | **String**|  | 

### Return type

[**[Vacancy]**](Vacancy.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vacanciesRead

> Vacancy vacanciesRead(companyId, id)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.VacanciesApi();
let companyId = "companyId_example"; // String | 
let id = "id_example"; // String | 
apiInstance.vacanciesRead(companyId, id, (error, data, response) => {
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
 **companyId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Vacancy**](Vacancy.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

