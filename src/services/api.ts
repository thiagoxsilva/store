import axios from "axios";

const api: any = axios.create({
  baseURL: "https://fakestoreapi.com",
});

api.interceptors.response.use(undefined, (err) => {
  const { config, message } = err;
  if (!config || !config.retry) {
    return Promise.reject(err);
  }
  // retry while Network timeout or Network Error
  if (!(message.includes("timeout") || message.includes("Network Error"))) {
    return Promise.reject(err);
  }
  config.retry -= 1;
  const delayRetryRequest = new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, config.retryDelay || 1000);
  });

  return delayRetryRequest.then(() => axios(config));
});

export default api;
