import { ADD_ARTICLE } from "../actionTypes";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}