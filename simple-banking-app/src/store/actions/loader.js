import { IS_LOADING, DONE_LOADING } from '../actionTypes';

export function loading() {
  return { type: IS_LOADING };
};

export function doneLoading() {
  return { type: DONE_LOADING };
}