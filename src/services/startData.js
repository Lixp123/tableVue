import request from '../request'
import {createFormDataPostRequest, createDeleteRequest,createRestfulGetRequest, transferParamsToGetRequest, createGetRequest, createPutRequest} from './requestTransfer';

 function getMallrankings(params) {
  return request('/mall/corp/mallrankings', createFormDataPostRequest(params));
}

 function mydata(params) {
  return request('/mall/corp/mallrankings', createFormDataPostRequest(params));
}
export default {
  getMallrankings,
  mydata
}
