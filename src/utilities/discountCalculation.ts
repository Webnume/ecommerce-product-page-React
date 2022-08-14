import { formatCurrency } from "./formatCurrency";

export function discountCalculation(price: number, discount: number):  number {
  return price * (discount / 100);
}
