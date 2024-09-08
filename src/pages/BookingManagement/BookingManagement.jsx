import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider"; // Assuming you have an AuthProvider for authentication
import useBookings from "../../hooks/useBookings";
import Swal from "sweetalert2";

const BookingManagement = () => {
  const { user } = useContext(AuthContext); // Access the logged-in user's email
  const [bookings, loading, refetch] = useBookings(user?.email); // Fetch user's bookings

  const handleDelete = async (bookingId) => {
    const confirmation = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    });

    if (confirmation.isConfirmed) {
      try {
        const response = await fetch(
          `https://tourser-zshohags-projects.vercel.app/bookings/${bookingId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          Swal.fire("Deleted!", "Your booking has been deleted.", "success");
          refetch(); // Refresh the bookings list after deletion
        } else {
          Swal.fire("Error!", "Failed to delete the booking.", "error");
        }
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        Swal.fire(
          "Error!",
          "An error occurred while deleting the booking.",
          "error"
        );
      }
    }
  };

  if (loading) {
    return <p className="text-white text-center ">Loading your bookings...</p>;
  }

  if (!user?.email) {
    return (
      <p className="text-white text-center ">
        Please log in to view your bookings.
      </p>
    );
  }

  if (bookings.length === 0) {
    return (
      <p className="text-white text-center ">
        No bookings found for your email: {user?.email}
      </p>
    );
  }

  return (
    <div className="p-6 mt-10 text-white">
      <h1 className="text-center text-2xl font-bold mb-6">Your Bookings</h1>
      <div className="grid grid-cols-1 gap-6">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="border p-4 rounded flex flex-col md:flex-row gap-4"
          >
            <img
              src={booking.imageUrl}
              alt={booking.hotelName}
              className="w-full md:w-60 h-48 object-cover rounded"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-2">
                {booking.hotelName} - {booking.tourName}
              </h2>
              <p>
                <strong>From:</strong>{" "}
                {new Date(booking.from).toLocaleDateString("en-GB")}
              </p>
              <p>
                <strong>To:</strong>{" "}
                {new Date(booking.to).toLocaleDateString("en-GB")}
              </p>
              <p>
                <strong>Price:</strong> ${booking.price}
              </p>
              <p>
                <strong>Guests:</strong> {booking.guests}
              </p>
              <p>
                <strong>Bedrooms:</strong> {booking.bedrooms}
              </p>
              <p>
                <strong>Rating:</strong> {booking.rating}
              </p>
              <p>{booking.cancellation}</p>
              <p>{booking.facilities}</p>

              <button
                className="btn bg-cyan-900 hover:bg-cyan-900 px-4 py-2 text-white border-none rounded-none mt-4"
                onClick={() => handleDelete(booking._id)}
              >
                Delete Booking →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingManagement;
