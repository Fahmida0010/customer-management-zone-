import { useContext } from "react";
import { TicketContext } from "../context/TicketContext";
import TicketCard from "./TicketCard";
import TaskStatus from "./TaskStatus";

export default function MainSection() {
  const { tickets } = useContext(TicketContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
      <div>
        <TaskStatus />
      </div>
    </div>
  );
}

