import { OrderHistoryProp } from "../interfaces";
import { OrderItem } from "./OrderItem";
import "../css/OrderHistory.css";

export function OrderHistory({ orders }: OrderHistoryProp) {
  return (
    <section className="order-history_container">
      <h2 className="order_header">Order History</h2>
      <ul className="order_list">
        {orders &&
          orders.length > 0 &&
          orders.map((o) => <OrderItem key={o.id} order={o} />)}
      </ul>
    </section>
  );
}
