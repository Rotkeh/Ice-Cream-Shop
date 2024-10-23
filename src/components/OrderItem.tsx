import { OrderItemProp } from "../interfaces";
import "../css/OrderItem.css";

export function OrderItem({ order }: OrderItemProp) {
  return (
    <li className="order-item">
      <p>{order.date}</p>
      <div>
        {order.items.iceCreams.map((i) => (
          <div key={i.id}>
            <p>{i.iceCream.title}</p>
            <p>{i.amount}</p>
          </div>
        ))}
        {order.items.customIceCreams.map((i) => (
          <div key={-i.id}>
            <p>{i.container}</p>
            <p>{i.amount}</p>
          </div>
        ))}
      </div>
      <p>{order.price}</p>
    </li>
  );
}
