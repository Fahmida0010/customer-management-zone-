import { useContext } from "react";
import { TicketContext } from "../context/TicketContext";
import { toast } from "react-toastify";

export default function TaskStatus() {
  const { inProgressTickets, completeTicket } = useContext(TicketContext);

  function handleComplete(id) {
    completeTicket(id);
    toast.success("Ticket marked as Resolved!");
  }

  return (
    <div className="bg-blue-50 p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-bold mb-3 text-blue-700">In Progress</h2>
      {inProgressTickets.length === 0 ? (
        <p className="text-gray-500">No tickets in progress.</p>
      ) : (
        <ul className="space-y-2">
          {inProgressTickets.map((ticket) => (
            <li
              key={ticket.id}
              className="flex items-center justify-between bg-white p-3 rounded-lg shadow"
            >
              <span className="font-medium">{ticket.title}</span>
              <button
                onClick={() => handleComplete(ticket.id)}
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg"
              >
                Complete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

