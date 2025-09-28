import { createContext, useState } from "react";
import ticketsData from "../data/ticketsData";

export const TicketContext = createContext();

export function TicketProvider({ children }) {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgressTickets, setInProgressTickets] = useState(
    ticketsData.filter((t) => t.status.toLowerCase() === "in progress")
  );
  const [resolvedTickets, setResolvedTickets] = useState(
    ticketsData.filter((t) => t.status.toLowerCase() === "resolved")
  );

  function addToInProgress(ticket) {
    if (!inProgressTickets.find((t) => t.id === ticket.id)) {
      setInProgressTickets([...inProgressTickets, ticket]);
    }
  }

  function completeTicket(id) {
    const completed = inProgressTickets.find((t) => t.id === id);
    setInProgressTickets(inProgressTickets.filter((t) => t.id !== id));
    setResolvedTickets([...resolvedTickets, { ...completed, status: "Resolved" }]);
    setTickets(tickets.filter((t) => t.id !== id));
  }

  return (
    <TicketContext.Provider
      value={{
        tickets,
        inProgressTickets,
        resolvedTickets,
        addToInProgress,
        completeTicket,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
}
