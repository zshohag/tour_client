import { useLocation } from "react-router-dom";
import useHotels from "../../hooks/useHotels";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider"; // Assuming you have an AuthProvider for authentication

const HotelBooking = () => {
  const { user } = useContext(AuthContext); // Access the logged-in user's information
  const location = useLocation();
  const { tour, origin, destination, from, to } = location.state || {};

  // Fetch hotels based on the tour name
  const [hotels, loading] = useHotels(tour?.name);

  const handleBooking = async (hotel) => {
    const bookingData = {
      email: user?.email, // Add the user's email
      tourName: tour?.name,
      origin,
      destination,
      from,
      to,
      hotelName: hotel.hotelName,
      imageUrl: hotel.photoUrl,
      guests: hotel.guests,
      bedrooms: hotel.bedrooms,
      rating: hotel.rating,
      price: hotel.price,
      cancellation: hotel.cancellation,
      facilities: hotel.facilities,
    };

    try {
      const response = await fetch(
        "https://tourser-zshohags-projects.vercel.app/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      if (response.ok) {
        Swal.fire({
          title: "Booking Confirmed!",
          text: `Your booking for ${hotel.hotelName} has been successfully made.`,
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "There was an issue with your booking. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "There was an issue with your booking. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="text-white p-6 mt-10">
      {loading ? (
        <p className="text-center text-lg font-semibold">Loading hotels...</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <h1 className="text-center text-2xl font-bold mb-6">
              Hotel Booking Info
            </h1>
            <p className="mb-2">
              <strong>Tour Name:</strong> {tour?.name}
            </p>
            <p className="mb-2">
              <strong>Origin:</strong> {origin}
            </p>
            <p className="mb-2">
              <strong>Destination:</strong> {destination}
            </p>
            <p className="mb-2">
              <strong>From:</strong> {from?.toLocaleDateString("en-GB")}
            </p>
            <p className="mb-6">
              <strong>To:</strong> {to?.toLocaleDateString("en-GB")}
            </p>
            <h2 className="text-xl">
              Hotels Available for{" "}
              <span className="text-xl font-semibold mb-4"> {tour?.name} </span>{" "}
              Tour
            </h2>
          </div>

          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 gap-6">
              {hotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="border p-4 rounded flex flex-col md:flex-row gap-4"
                >
                  <img
                    src={hotel.photoUrl}
                    alt={hotel.hotelName}
                    className="w-full md:w-60 h-48 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">
                      {hotel.hotelName}
                    </h3>
                    <p className="mb-1">
                      <strong>Guests:</strong> {hotel.guests}
                    </p>
                    <p className="mb-1">
                      <strong>Bedrooms:</strong> {hotel.bedrooms}
                    </p>
                    <p className="mb-1">
                      <strong>Rating:</strong> {hotel.rating}
                    </p>
                    <p className="mb-1">
                      <strong>Price:</strong> ${hotel.price}
                    </p>
                    <p className="mb-1">{hotel.cancellation}</p>
                    <p className="mb-4">{hotel.facilities}</p>

                    <button
                      className="btn bg-cyan-900 hover:bg-cyan-900 px-4 py-2 text-white rounded-none"
                      onClick={() => handleBooking(hotel)}
                    >
                      Confirm Booking →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelBooking;
