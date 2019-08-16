import axios from 'axios'
import { message } from 'element-ui'
export default function request(url, options = { method: 'GET', credentials: 'include' }){
  return axios({
    url: `${process.env.API_HOST}${url}`,
    method: options.method,
    withCredentials: true,
    body: options.body,
    crossDomain: true,
  }).then(function (res) {
      if (res.request) {
        return { data: res.data };
      }
      return null;
  }).catch((err) => {
      if (err.request && err.request.status) {
        switch (err.status) {
          case 401:
            return null;
        }
      }
      if (err && !err.request) {
        message.error(err.message)
      } else {
        message.error(err.request.message)
      }
      return null;
    });
}
