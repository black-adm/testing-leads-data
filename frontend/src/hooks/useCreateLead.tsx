import { Lead } from "../types/lead";
import { useEffect, useState } from "react";
import { api } from "../api";

export function useCreateLead() {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    let isMounted = true;

    const createLead = async () => {
      try {
        const response = await api.get("/leads");

        if (isMounted) {
          setLeads(response.data);
        }
      } catch (error) {
        console.error("Error fetching leads:", error);
      }
    };

    createLead();
    return () => {
      isMounted = false;
    };
  }, []);

  return { leads };
}
