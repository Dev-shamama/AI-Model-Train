"use client";
import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
} from "react";

export type TodoContextType = {
  isAuth: boolean;
  userData: any;
  setIsAuth: any;
  Login: () => void;
  Logout: () => void;
};

export const AuthenticationContext = createContext<TodoContextType | null>(
  null
);

export const AuthenticationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState();

  const Login = () => {
    setIsAuth(true);
  };

  const Logout = async () => {
    setIsAuth(false);
    localStorage.setItem("token", "");
  };

  const AuthMe = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/me`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `${localStorage.getItem("token")}` || "",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      const result = await response.json();
      if (result.success === true) {
        setUserData(result.data);
        Login();
      }
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  useEffect(() => {
    AuthMe();
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{ isAuth, Login, Logout, setIsAuth, userData }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthenticationContext);
  if (context === undefined) {
    throw new Error(
      "AuthenticationContext must be used within a AuthenticationProvider"
    );
  }
  return context;
};
