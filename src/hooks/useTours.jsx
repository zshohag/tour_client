import { useQuery } from "@tanstack/react-query";

const useTours = (searchQuery) => {
  const {
    data: tours = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["tours", searchQuery],
    queryFn: async () => {
      const res = await fetch(
        "https://tourser-zshohags-projects.vercel.app/tours"
      );
      const data = await res.json();
      // Filter tours based on search query
      if (searchQuery) {
        return data.filter((tour) =>
          tour.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      return data;
    },
  });

  return [tours, loading, refetch];
};

export default useTours;
