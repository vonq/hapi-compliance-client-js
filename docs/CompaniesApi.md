# HapiOnboardingApi.CompaniesApi

All URIs are relative to *https://hapi-ofccp-onboarding.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companiesContactsCreate**](CompaniesApi.md#companiesContactsCreate) | **POST** /companies/{company_id}/contacts/ | 
[**companiesContactsDelete**](CompaniesApi.md#companiesContactsDelete) | **DELETE** /companies/{company_id}/contacts/{id}/ | 
[**companiesContactsList**](CompaniesApi.md#companiesContactsList) | **GET** /companies/{company_id}/contacts/ | 
[**companiesContactsPartialUpdate**](CompaniesApi.md#companiesContactsPartialUpdate) | **PATCH** /companies/{company_id}/contacts/{id}/ | 
[**companiesContactsRead**](CompaniesApi.md#companiesContactsRead) | **GET** /companies/{company_id}/contacts/{id}/ | 
[**companiesContactsUpdate**](CompaniesApi.md#companiesContactsUpdate) | **PUT** /companies/{company_id}/contacts/{id}/ | 
[**companiesCreate**](CompaniesApi.md#companiesCreate) | **POST** /companies/ | 
[**companiesDelete**](CompaniesApi.md#companiesDelete) | **DELETE** /companies/{id}/ | 
[**companiesList**](CompaniesApi.md#companiesList) | **GET** /companies/ | 
[**companiesPartialUpdate**](CompaniesApi.md#companiesPartialUpdate) | **PATCH** /companies/{id}/ | 
[**companiesRead**](CompaniesApi.md#companiesRead) | **GET** /companies/{id}/ | 
[**companiesSubsidiariesBoardsCreate**](CompaniesApi.md#companiesSubsidiariesBoardsCreate) | **POST** /companies/{company_id}/subsidiaries/{subsidiary_id}/boards/ | 
[**companiesSubsidiariesBoardsDelete**](CompaniesApi.md#companiesSubsidiariesBoardsDelete) | **DELETE** /companies/{company_id}/subsidiaries/{subsidiary_id}/boards/{id}/ | 
[**companiesSubsidiariesBoardsList**](CompaniesApi.md#companiesSubsidiariesBoardsList) | **GET** /companies/{company_id}/subsidiaries/{subsidiary_id}/boards/ | 
[**companiesSubsidiariesBoardsPartialUpdate**](CompaniesApi.md#companiesSubsidiariesBoardsPartialUpdate) | **PATCH** /companies/{company_id}/subsidiaries/{subsidiary_id}/boards/{id}/ | 
[**companiesSubsidiariesBoardsRead**](CompaniesApi.md#companiesSubsidiariesBoardsRead) | **GET** /companies/{company_id}/subsidiaries/{subsidiary_id}/boards/{id}/ | 
[**companiesSubsidiariesBoardsUpdate**](CompaniesApi.md#companiesSubsidiariesBoardsUpdate) | **PUT** /companies/{company_id}/subsidiaries/{subsidiary_id}/boards/{id}/ | 
[**companiesSubsidiariesCreate**](CompaniesApi.md#companiesSubsidiariesCreate) | **POST** /companies/{company_id}/subsidiaries/ | 
[**companiesSubsidiariesDelete**](CompaniesApi.md#companiesSubsidiariesDelete) | **DELETE** /companies/{company_id}/subsidiaries/{id}/ | 
[**companiesSubsidiariesList**](CompaniesApi.md#companiesSubsidiariesList) | **GET** /companies/{company_id}/subsidiaries/ | 
[**companiesSubsidiariesPartialUpdate**](CompaniesApi.md#companiesSubsidiariesPartialUpdate) | **PATCH** /companies/{company_id}/subsidiaries/{id}/ | 
[**companiesSubsidiariesRead**](CompaniesApi.md#companiesSubsidiariesRead) | **GET** /companies/{company_id}/subsidiaries/{id}/ | 
[**companiesSubsidiariesUpdate**](CompaniesApi.md#companiesSubsidiariesUpdate) | **PUT** /companies/{company_id}/subsidiaries/{id}/ | 
[**companiesUpdate**](CompaniesApi.md#companiesUpdate) | **PUT** /companies/{id}/ | 
[**submitForReview**](CompaniesApi.md#submitForReview) | **POST** /companies/{id}/submit/ | 



## companiesContactsCreate

> PointOfContact companiesContactsCreate(companyId, data)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let companyId = "companyId_example"; // String | 
let data = new HapiOnboardingApi.PointOfContact(); // PointOfContact | 
apiInstance.companiesContactsCreate(companyId, data, (error, data, response) => {
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
 **data** | [**PointOfContact**](PointOfContact.md)|  | 

### Return type

[**PointOfContact**](PointOfContact.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesContactsDelete

> companiesContactsDelete(companyId, id)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let companyId = "companyId_example"; // String | 
let id = "id_example"; // String | 
apiInstance.companiesContactsDelete(companyId, id, (error, data, response) => {
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
 **companyId** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## companiesContactsList

> [PointOfContact] companiesContactsList(companyId)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let companyId = "companyId_example"; // String | 
apiInstance.companiesContactsList(companyId, (error, data, response) => {
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

[**[PointOfContact]**](PointOfContact.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesContactsPartialUpdate

> PointOfContact companiesContactsPartialUpdate(companyId, id, data)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let companyId = "companyId_example"; // String | 
let id = "id_example"; // String | 
let data = new HapiOnboardingApi.PointOfContact(); // PointOfContact | 
apiInstance.companiesContactsPartialUpdate(companyId, id, data, (error, data, response) => {
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
 **data** | [**PointOfContact**](PointOfContact.md)|  | 

### Return type

[**PointOfContact**](PointOfContact.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesContactsRead

> PointOfContact companiesContactsRead(companyId, id)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let companyId = "companyId_example"; // String | 
let id = "id_example"; // String | 
apiInstance.companiesContactsRead(companyId, id, (error, data, response) => {
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

[**PointOfContact**](PointOfContact.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesContactsUpdate

> PointOfContact companiesContactsUpdate(companyId, id, data)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let companyId = "companyId_example"; // String | 
let id = "id_example"; // String | 
let data = new HapiOnboardingApi.PointOfContact(); // PointOfContact | 
apiInstance.companiesContactsUpdate(companyId, id, data, (error, data, response) => {
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
 **data** | [**PointOfContact**](PointOfContact.md)|  | 

### Return type

[**PointOfContact**](PointOfContact.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesCreate

> Company companiesCreate(data)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let data = new HapiOnboardingApi.Company(); // Company | 
apiInstance.companiesCreate(data, (error, data, response) => {
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
 **data** | [**Company**](Company.md)|  | 

### Return type

[**Company**](Company.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesDelete

> companiesDelete(id)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let id = "id_example"; // String | 
apiInstance.companiesDelete(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## companiesList

> [Company] companiesList()



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
apiInstance.companiesList((error, data, response) => {
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

[**[Company]**](Company.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesPartialUpdate

> Company companiesPartialUpdate(id, data)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let id = "id_example"; // String | 
let data = new HapiOnboardingApi.Company(); // Company | 
apiInstance.companiesPartialUpdate(id, data, (error, data, response) => {
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
 **id** | **String**|  | 
 **data** | [**Company**](Company.md)|  | 

### Return type

[**Company**](Company.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesRead

> Company companiesRead(id)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let id = "id_example"; // String | 
apiInstance.companiesRead(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**Company**](Company.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesSubsidiariesBoardsCreate

> BoardContract companiesSubsidiariesBoardsCreate(companyId, subsidiaryId, data)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let companyId = "companyId_example"; // String | 
let subsidiaryId = "subsidiaryId_example"; // String | 
let data = new HapiOnboardingApi.BoardContract(); // BoardContract | 
apiInstance.companiesSubsidiariesBoardsCreate(companyId, subsidiaryId, data, (error, data, response) => {
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
 **subsidiaryId** | **String**|  | 
 **data** | [**BoardContract**](BoardContract.md)|  | 

### Return type

[**BoardContract**](BoardContract.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesSubsidiariesBoardsDelete

> companiesSubsidiariesBoardsDelete(companyId, id, subsidiaryId)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let companyId = "companyId_example"; // String | 
let id = "id_example"; // String | 
let subsidiaryId = "subsidiaryId_example"; // String | 
apiInstance.companiesSubsidiariesBoardsDelete(companyId, id, subsidiaryId, (error, data, response) => {
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
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **subsidiaryId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## companiesSubsidiariesBoardsList

> [BoardContract] companiesSubsidiariesBoardsList(companyId, subsidiaryId)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let companyId = "companyId_example"; // String | 
let subsidiaryId = "subsidiaryId_example"; // String | 
apiInstance.companiesSubsidiariesBoardsList(companyId, subsidiaryId, (error, data, response) => {
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
 **subsidiaryId** | **String**|  | 

### Return type

[**[BoardContract]**](BoardContract.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesSubsidiariesBoardsPartialUpdate

> BoardContract companiesSubsidiariesBoardsPartialUpdate(companyId, id, subsidiaryId, data)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let companyId = "companyId_example"; // String | 
let id = "id_example"; // String | 
let subsidiaryId = "subsidiaryId_example"; // String | 
let data = new HapiOnboardingApi.BoardContract(); // BoardContract | 
apiInstance.companiesSubsidiariesBoardsPartialUpdate(companyId, id, subsidiaryId, data, (error, data, response) => {
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
 **subsidiaryId** | **String**|  | 
 **data** | [**BoardContract**](BoardContract.md)|  | 

### Return type

[**BoardContract**](BoardContract.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesSubsidiariesBoardsRead

> BoardContract companiesSubsidiariesBoardsRead(companyId, id, subsidiaryId)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let companyId = "companyId_example"; // String | 
let id = "id_example"; // String | 
let subsidiaryId = "subsidiaryId_example"; // String | 
apiInstance.companiesSubsidiariesBoardsRead(companyId, id, subsidiaryId, (error, data, response) => {
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
 **subsidiaryId** | **String**|  | 

### Return type

[**BoardContract**](BoardContract.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesSubsidiariesBoardsUpdate

> BoardContract companiesSubsidiariesBoardsUpdate(companyId, id, subsidiaryId, data)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let companyId = "companyId_example"; // String | 
let id = "id_example"; // String | 
let subsidiaryId = "subsidiaryId_example"; // String | 
let data = new HapiOnboardingApi.BoardContract(); // BoardContract | 
apiInstance.companiesSubsidiariesBoardsUpdate(companyId, id, subsidiaryId, data, (error, data, response) => {
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
 **subsidiaryId** | **String**|  | 
 **data** | [**BoardContract**](BoardContract.md)|  | 

### Return type

[**BoardContract**](BoardContract.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesSubsidiariesCreate

> CompanySubsidiary companiesSubsidiariesCreate(companyId, data)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let companyId = "companyId_example"; // String | 
let data = new HapiOnboardingApi.CompanySubsidiary(); // CompanySubsidiary | 
apiInstance.companiesSubsidiariesCreate(companyId, data, (error, data, response) => {
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
 **data** | [**CompanySubsidiary**](CompanySubsidiary.md)|  | 

### Return type

[**CompanySubsidiary**](CompanySubsidiary.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesSubsidiariesDelete

> companiesSubsidiariesDelete(companyId, id)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let companyId = "companyId_example"; // String | 
let id = "id_example"; // String | 
apiInstance.companiesSubsidiariesDelete(companyId, id, (error, data, response) => {
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
 **companyId** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## companiesSubsidiariesList

> [CompanySubsidiary] companiesSubsidiariesList(companyId)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let companyId = "companyId_example"; // String | 
apiInstance.companiesSubsidiariesList(companyId, (error, data, response) => {
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

[**[CompanySubsidiary]**](CompanySubsidiary.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesSubsidiariesPartialUpdate

> CompanySubsidiary companiesSubsidiariesPartialUpdate(companyId, id, data)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let companyId = "companyId_example"; // String | 
let id = "id_example"; // String | 
let data = new HapiOnboardingApi.CompanySubsidiary(); // CompanySubsidiary | 
apiInstance.companiesSubsidiariesPartialUpdate(companyId, id, data, (error, data, response) => {
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
 **data** | [**CompanySubsidiary**](CompanySubsidiary.md)|  | 

### Return type

[**CompanySubsidiary**](CompanySubsidiary.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesSubsidiariesRead

> CompanySubsidiary companiesSubsidiariesRead(companyId, id)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let companyId = "companyId_example"; // String | 
let id = "id_example"; // String | 
apiInstance.companiesSubsidiariesRead(companyId, id, (error, data, response) => {
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

[**CompanySubsidiary**](CompanySubsidiary.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesSubsidiariesUpdate

> CompanySubsidiary companiesSubsidiariesUpdate(companyId, id, data)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let companyId = "companyId_example"; // String | 
let id = "id_example"; // String | 
let data = new HapiOnboardingApi.CompanySubsidiary(); // CompanySubsidiary | 
apiInstance.companiesSubsidiariesUpdate(companyId, id, data, (error, data, response) => {
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
 **data** | [**CompanySubsidiary**](CompanySubsidiary.md)|  | 

### Return type

[**CompanySubsidiary**](CompanySubsidiary.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesUpdate

> Company companiesUpdate(id, data)



### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let id = "id_example"; // String | 
let data = new HapiOnboardingApi.Company(); // Company | 
apiInstance.companiesUpdate(id, data, (error, data, response) => {
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
 **id** | **String**|  | 
 **data** | [**Company**](Company.md)|  | 

### Return type

[**Company**](Company.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submitForReview

> submitForReview(id, data)



This endpoint submits for review a company with all details filled.

### Example

```javascript
import HapiOnboardingApi from 'hapi_onboarding_api';
let defaultClient = HapiOnboardingApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new HapiOnboardingApi.CompaniesApi();
let id = "id_example"; // String | 
let data = new HapiOnboardingApi.Company(); // Company | 
apiInstance.submitForReview(id, data, (error, data, response) => {
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
 **id** | **String**|  | 
 **data** | [**Company**](Company.md)|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

