import  qs from 'qs';

export function createFormDataPostRequest(params) {
    return {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', },
        credentials: 'include',
        body: qs.stringify(params),
    }
}

export function createGetRequest(params = {}) {
    return {
        method: 'get',
        credentials: 'include',
    }
}

export function transferParamsToGetRequest(url, params = {}) {
    if (qs.stringify(params)) {
        return `${url}?${qs.stringify(params)}`;
    }
    return url;
}

export function createRestfulGetRequest(url, params = {}) {
    let key = Object.keys(params)[0];
    let param = params[key];
    return `${url}/${param}`;
}

export function createDeleteRequest() {
    return {
        method: 'DELETE',
        credentials: 'include',
    }
}

export function createPutRequest(params) {
    return {
        method: 'put',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', },
        credentials: 'include',
        body: qs.stringify(params),
    }
}

export function createRestfulDeleteRequest(url, params = {}) {
    let key = Object.keys(params)[0];
    let param = params[key];
    return `${url}/${param}`;
}
