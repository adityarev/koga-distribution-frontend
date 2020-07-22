import { PURCHASE_ACTIVITY, SELL_ACTIVITY } from '../constants/activity';
import { CASH_TYPE, CREDIT_TYPE } from '../constants/payment';
import { currentTime } from '../dummies/time';
import { createItem } from '../creators/entity';

export const items = [
  createItem(1, "Susu", 26000, 10, currentTime),
  createItem(2, "Kopi", 19000, 34, currentTime),
  createItem(3, "Rendang", 40000, 0, currentTime)
]

export const transactions = [
  {
    id: 1,
    type: PURCHASE_ACTIVITY,
    partner: "Mandala",
    paymentType: CASH_TYPE,
    username: "rizkyh",
    time: currentTime,
    items: [
      { name: "Susu", quantity: 50, price: 26000 }
    ]
  },
  {
    id: 2,
    type: SELL_ACTIVITY,
    partner: "Trona",
    paymentType: CREDIT_TYPE,
    username: "rizkyh",
    time: currentTime,
    items: [
      { name: "Susu", quantity: 25, price: 26000 },
      { name: "Kerupuk Lado", quantity: 40, price: 15000 },
      { name: "Roti", quantity: 50, price: 18000 }
    ]
  }
]
