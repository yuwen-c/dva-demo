// API，fetch過去可以拿到mock data

import request from "../utils/request";

export function query() {
  return request("/api/users");
}

export function getProduct() {
  return request("/api/product");
}

export function posts(){
  return request("/api/posts");
}