/* eslint-disable import/prefer-default-export */
import ajax from './ajax';

export function getBudgetList(params) {
  return ajax.post('/promo/budget/queryBudgets.json', params);
}

export function addBudget(params) {
  return ajax.post('/promo/budget/addBudget.json', params);
}

export function createBudget(params) {
  return ajax.post('/promo/budget/createBudget.json', params);
}

export function getBudgetAddList(params) {
  return ajax.post('/promo/budget/queryAppendApproveOrder.json', params);
}
