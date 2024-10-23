import { useContext, useEffect } from "react";
import { AccountContext } from "../context";
import { useNavigate } from "react-router-dom";
import { OrderHistory } from "../components";
import "../css/UserPage.css";

export function UserPage() {
  const navigate = useNavigate();
  const { token, account, checkToken } = useContext(AccountContext);
  useEffect(() => {
    checkToken();
  }, []);
  return (
    <main>
      {token ? (
        <p className="user_name">{account.name}</p>
      ) : (
        <>
          <button className="user_button" onClick={() => navigate("/register")}>
            Register
          </button>
          <button className="user_button" onClick={() => navigate("/login")}>
            Login
          </button>
        </>
      )}
      {token ? (
        <OrderHistory orders={account.orderHistory} />
      ) : (
        <p className="user_history-msg">Login to see order history</p>
      )}
    </main>
  );
}
