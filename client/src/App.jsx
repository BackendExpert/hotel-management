import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/HomePage/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Activity from "./pages/Activity/Activity";
import AboutHotel from "./pages/AboutHotel/AboutHotel";
import 'aos/dist/aos.css';
import Restaurant from "./pages/Restaurant/Restaurant";
import HotelRoom from "./pages/HotelRooms/HotelRoom";
import StaffLogin from "./pages/StaffAuth/StaffLogin";
import DashHome from "./pages/Dashboard/DashHome";
import DashBoard from "./components/Dashboard/DashBoard";
import PrivateRoute from "./components/Auth/PrivateRoute";
import ManageRooms from "./pages/ManageRoom/ManageRooms";
import AddRooms from "./pages/ManageRoom/AddRooms";



export default function App() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {

      setShowNavBar(false);
    } else {

      setShowNavBar(true);
    }
    setIsTopOfPage(currentScrollY === 0);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const shouldShowNavBar = !location.pathname.startsWith("/Dashboard");
  const shouldShowFooter = !location.pathname.startsWith("/Dashboard");
  return (
    <BrowserRouter>
        {shouldShowNavBar && (
          <div
          className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
            showNavBar ? "translate-y-0" : "-translate-y-full"
          } ${
            isTopOfPage
              ? "bg-transparent transition-colors duration-500"
              : "bg-[#7B3F00] shadow-md transition-colors duration-500"
          }`}
          >
            <Nav />
          </div>
        )}
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/local-activities" element={<Activity />} />
        <Route path="/about-hotel" element={<AboutHotel /> } /> 
        <Route path="/hotel-restaurant" element={<Restaurant /> } />
        <Route path="/hotel-room/:roomtype" element={<HotelRoom /> } />
        <Route path="/staff-login" element={<StaffLogin /> } />

        <Route path="/Dashboard/" element={ <PrivateRoute element={<DashBoard />} /> } >
          <Route path="Home" element={<DashHome /> } />
          <Route path="Rooms" element={<ManageRooms /> } />
          <Route path="add-room" element={<AddRooms /> } />
        </Route>
        
      </Routes>
      {shouldShowFooter && <Footer />}
    </BrowserRouter>
  )
}