import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ContactUs from "./pages/ContactUs";
import Chat from "./pages/Chat";
import {Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/chat" element={<Chat/>}/>
      </Routes>
    </div>
  );
};

export default App;
