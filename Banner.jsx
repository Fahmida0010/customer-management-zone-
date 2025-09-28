import { useContext } from "react";
import { TicketContext } from "../context/TicketContext";

export default function Banner() {
  const { inProgressTickets, resolvedTickets } = useContext(TicketContext);

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 flex gap-6 justify-center">
      <div className="bg-blue-500 text-white rounded-xl p-4 w-40 text-center shadow-md">
        <h2 className="text-lg font-semibold">In Progress</h2>
        <p className="text-2xl font-bold">{inProgressTickets.length}</p>
      </div>
      <div className="bg-green-500 text-white rounded-xl p-4 w-40 text-center shadow-md">
        <h2 className="text-lg font-semibold">Resolved</h2>
        <p className="text-2xl font-bold">{resolvedTickets.length}</p>
      </div>
    </div>
  );
}
