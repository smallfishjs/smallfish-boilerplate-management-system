import request from "smallfish/request";
import { message } from "smallfish/antd";
import uuid from "smallfish/util/uuid/v4";

export const defaultErrorMessage =
  "Oops, something went wrong. Please try again later.";

const prefix = "";

function ajax(url, method, params) {
  const config = { url, method, timeout: 30000 };
  if (prefix) {
    config.basePath = prefix;
  }
  if (params) {
    if (method === "get") {
      config.params = { ...config.params, ...params };
    } else {
      config.data = params;
    }
  }
  if (method === "post") {
    if (!config.data) config.data = {};
    config.data.requestId = uuid();
  }

  return request(config).then(
    ({ data }) => {
      let msg = "";
      if (data.code === "OVERTIME") {
        window.location.reload();
      }
      if (data.code === "NOAUTH") {
        msg = "No authority!";
      }
      if (data.code === "SUCCESS") {
        return data.data;
      }
      message.destroy();
      message.error(msg || defaultErrorMessage);
      throw data;
    },
    err => {
      message.destroy();
      message.error(defaultErrorMessage);
      throw error;
    }
  );
}

export default {
  get: (url, params) => ajax(url, "get", params),
  post: (url, params) => ajax(url, "post", params)
};
