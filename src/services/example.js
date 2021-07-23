// API，fetch過去可以拿到data

import request from "../utils/request";

export function query() {
  return request("/api/users");
}

export function getProduct() {
  return request("/api/product");
}
