import Qs from 'qs';
let env = process.env.NODE_ENV, baseURL;

switch (env) {
  case "dev":
    baseURL = "/api"
    break;
  case "qa":
    baseURL = "http://qa.web.fenjiread.com"
    break;
  case "production":
    baseURL = "https://schoolmaster.fenjiread.com"
    break;
}

const standardConfig = {
  baseURL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: 'json',
}

const serializeConfig = {
  baseURL,
  timeout: 30000,
  transformRequest: [function (data) {
    data.params = JSON.stringify(data.params)
    data = Qs.stringify(data)
    return data
  }],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  responseType: 'json',
}

export {baseURL, standardConfig, serializeConfig}