export const createItem = (id, name, price, stockAmount, lastUpdate) => {
  return { id, name, price, stockAmount, lastUpdate };
}

export const createPurchase = (id, itemId, quantity) => {
  return { id, itemId, quantity };
}

export const createPurchaseGroup = (id, number, purchaseId) => {
  return { id, number, purchaseId };
}

export const createSell = (id, itemId, quantity) => {
  return { id, itemId, quantity };
}

export const createSellGroup = (id, number, sellId) => {
  return { id, number, sellId };
}

export const createTransaction = (id, type, groupNumber, partner, paymentType, username, time) => {
  return { id, type, groupNumber, partner, paymentType, username, time };
}

export const createPayment = (type, name) => {
  return { type, name };
}

export const createUser = (username, password) => {
  return { username, password };
}
