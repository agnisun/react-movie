import { useEffect, useState } from "react";
import { Alert } from "antd";

import { headers } from "../http";

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(!!sessionStorage.getItem("session_id"));
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isAuth) return;

    const handleOffline = () => !isAuth && setErrorMessage("Connection lost");

    fetch("https://api.themoviedb.org/3/authentication/guest_session/new", {
      headers,
    })
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.setItem("session_id", data.guest_session_id);
        setIsAuth(true);
      })
      .catch((error) => setErrorMessage(error.message || "Something went wrong"));

    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isAuth ? (
    children
  ) : (
    <div>{errorMessage && <Alert message="Error" description={errorMessage} type="error" showIcon banner />}</div>
  );
};
