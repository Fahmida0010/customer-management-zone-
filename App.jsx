import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import { TicketProvider } from "./context/TicketContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <TicketProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Banner />
        <MainSection />
        <Footer />
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </TicketProvider>


  );
}


