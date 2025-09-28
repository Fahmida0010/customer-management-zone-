import { useContext } from "react";
import { TicketContext } from "../context/TicketContext";
import { toast } from "react-toastify";

export default function TicketCard({ ticket }) {
  const { addToInProgress } = useContext(TicketContext);

  function handleClick() {
    addToInProgress(ticket);
    toast.info(`${ticket.title} added to In Progress`);
  }

  return (
    <div
      className={`p-4 rounded-xl shadow-md cursor-pointer ${
        ticket.status.toLowerCase() === "in progress"
          ? "bg-yellow-50"
          : "bg-white"
      }`}
      onClick={handleClick}
    >
      <div className="text-sm text-gray-500">{ticket.id}</div>
      <h3 className="text-lg font-bold">{ticket.title}</h3>
      <p className="text-gray-700 text-sm">{ticket.description}</p>
      <div className="flex justify-between mt-2 text-sm">
        <span className="font-medium">{ticket.customer}</span>
        <span>{ticket.priority}</span>
        <span>{ticket.createdAt}</span>
      </div>
    </div>
  );
}
