import { CartItem } from "../redux/cart/types";
import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromSS = () => {
    const data = sessionStorage.getItem("cart");
    const items = data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(items);

    return {
        items: items as CartItem[],
        totalPrice: totalPrice,
    }
}