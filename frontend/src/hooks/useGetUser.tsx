import { User } from "../types/user";
import { useEffect, useState } from "react";
import { api } from "../api";

export function useGetUser() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    let isMounted = true;

    const request = async () => {
      try {
        const response = await api.get("/user");

        if (isMounted) {
          setUser(response.data);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    request();
    return () => {
      isMounted = false;
    };
  }, []);

  return { user };
}
