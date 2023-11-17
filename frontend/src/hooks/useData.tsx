import { Lead } from "../types/lead";
import { useEffect, useState } from "react";
import { api } from "../api";

export function useData() {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    let isMounted = true;

    const fetchLeads = async () => {
      try {
        const response = await api.get("/leads");

        if (isMounted) {
          setLeads(response.data);
        }
      } catch (error) {
        console.error("Error fetching leads:", error);
      }
    };

    fetchLeads();
    return () => {
      isMounted = false;
    };
  }, []);

  return { leads };
}
