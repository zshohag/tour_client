import { useQuery } from "@tanstack/react-query";

const useHotels = (tourName) => {
  const {
    data: hotels = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["hotels", tourName],
    queryFn: async () => {
      const res = await fetch(
        `https://tourser-zshohags-projects.vercel.app/hotels`
      );
      console.log(res);
      if (!res.ok) {
        throw new Error("Failed to fetch hotels");
      }
      const data = await res.json();

      // Filter hotels based on the category matching the tour name
      return data.filter((hotel) => hotel.category === tourName);
    },
  });

  return [hotels, loading, refetch];
};

export default useHotels;
