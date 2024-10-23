import { createContext, ReactNode, useState } from "react";
import {
  Account,
  IAccountContext,
  Order,
  UpdatedUserData,
} from "../interfaces";
import { api } from "../variables";
import { useNavigate } from "react-router-dom";

interface IAccountProviderProps {
  children: ReactNode;
}

export const AccountContext = createContext<IAccountContext>(
  {} as IAccountContext
);

export function AccountProvider({ children }: IAccountProviderProps) {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [account, setAccount] = useState<Account>({} as Account);

  const login = async (loginToken: string) => {
    setToken(loginToken);
    localStorage.setItem("token", loginToken);
    try {
      const response = await fetch(`${api}/account`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        console.log("recieved user data");
        setAccount(userData);
        navigate("/account");
      } else {
        console.error("Error fetching user profile:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updateUserOrderHistory = (order: Order) => {
    const updatedOrderHistory: Order[] =
      account.orderHistory.length > 0
        ? [...account.orderHistory, order]
        : [order];
    setAccount((prev) => {
      return {
        ...prev,
        orderHistory: updatedOrderHistory,
      };
    });
    updateUserInDB({ orderHistory: updatedOrderHistory });
  };

  const updateUserInDB = async (updatedData: UpdatedUserData) => {
    try {
      const response = await fetch(`${api}/updateUser`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("User updated:", result);
      } else {
        console.error("Error updating user:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const checkToken = () => {
    const getToken = localStorage.getItem("token");
    if (getToken && !account) {
      setToken(getToken);
      login(getToken);
    }
  };

  return (
    <AccountContext.Provider
      value={{
        token,
        login,
        logout,
        checkToken,
        account,
        updateUserOrderHistory,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
