import { createBrowserRouter } from "react-router-dom";
import Booking from "../../pages/Booking/Booking";
import Login from "../../pages/Login/Login";
import Home from "../../pages/Home/Home/Home";
import SignUp from "../../pages/SignUp/SignUp";
import About from "../../pages/About/About";
import HotelBooking from "../../pages/HotelBooking/HotelBooking";
import BookingManagement from "../../pages/BookingManagement/BookingManagement.jsx";
import Main from "../../Layout/Main.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, // Main layout with Navbar and Footer
    children: [
      {
        path: "", // This is the root route, same as "/"
        element: <Home />,
      },
      {
        path: "bookings/:id", // Dynamic route for individual bookings
        element: (
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        ),
      },
      {
        path: "bookings/:id/hotelbooking", // Dynamic route for hotel booking
        element: (
          <PrivateRoute>
            <HotelBooking />
          </PrivateRoute>
        ),
      },
      {
        path: "managebookings", // Route for managing bookings
        element: (
          <PrivateRoute>
            <BookingManagement />
          </PrivateRoute>
        ),
      },
     
      {
        path: "login", // Route for login page
        element: <Login />,
      },
      {
        path: "signup", // Route for signup page
        element: <SignUp />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
