import { useQuery } from "@tanstack/react-query";

const useBookings = (email) => {
  const {
    data: bookings = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", email],
    queryFn: async () => {
      if (!email) return [];
      const res = await fetch(
        `https://tourser-zshohags-projects.vercel.app/bookings?email=${email}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch bookings");
      }
      return res.json();
    },
  });

  return [bookings, loading, refetch];
};

export default useBookings;
