import * as EC from '../creators/entity';
import { CASH_TYPE, CREDIT_TYPE } from '../constants/payment'
import { currentTime } from '../dummies/time';

export const item = EC.createItem(0, "Item0", 50000, 100, currentTime);
export const purchase = EC.createPurchase(0, 0, 5);
export const sell = EC.createSell(0, 0, 3);
export const transaction = EC.createTransaction(0, 0, "Mandala", CASH_TYPE, "rizkyh", currentTime);
