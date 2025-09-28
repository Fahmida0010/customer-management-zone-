export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4  flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-700">Customer Management Zone</h1>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">FAQ</a>
         <a href="#" className="hover:text-blue-600">Changelog</a>
        <a href="#" className="hover:text-blue-600">Blog</a>
         <a href="#" className="hover:text-blue-600">Download</a>
 <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl">
          New Ticket
        </button>
      </div>
    </nav>
  );
}
