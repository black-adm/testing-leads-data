import { Lead } from "../types/lead";
import { useEffect, useState } from "react";
import { api } from "../api";

export function useGetLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    let isMounted = true;

    const getLeads = async () => {
      try {
        const response = await api.get("/leads");

        if (isMounted) {
          setLeads(response.data);
        }
      } catch (error) {
        console.error("Error fetching leads:", error);
      }
    };

    getLeads();
    return () => {
      isMounted = false;
    };
  }, []);

  return { leads };
}
