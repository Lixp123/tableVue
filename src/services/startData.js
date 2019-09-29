import request from '../request'
import {createFormDataPostRequest, createDeleteRequest,createRestfulGetRequest, transferParamsToGetRequest, createGetRequest, createPutRequest} from './requestTransfer';

export function getMallrankings(params) {
  return request('/mall/corp/mallrankings', createFormDataPostRequest(params));
}

export function mydata(params) {
  return request('/mall/corp/mallrankings', createFormDataPostRequest(params));
}

