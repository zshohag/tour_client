import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import useTours from "../../hooks/useTours";

const Banner = ({ searchQuery }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filteredTours, setFilteredTours] = useState([]);
  const [tours, loading] = useTours();
  const navigate = useNavigate();

  useEffect(() => {
    if (tours.length) {
      const filtered = searchQuery
        ? tours.filter((tour) =>
            tour.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : tours;
      setFilteredTours(filtered);
      setActiveIndex(0); // Reset the active index when tours change
    }
  }, [searchQuery, tours]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleBookingClick = (_id) => {
    navigate(`/bookings/${_id}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row relative mt-20 m-6">
      <div className="w-full md:w-1/3">
        {filteredTours[activeIndex] && (
          <div className="lg:m-8">
            <h2 className="text-xl md:text-4xl text-base-300">
              {filteredTours[activeIndex].name}
            </h2>
            <p className="mt-4 text-sm text-base-300">
              {filteredTours[activeIndex].description.slice(0, 145)}...
            </p>
            <button
              onClick={() => handleBookingClick(filteredTours[activeIndex]._id)}
              className="mt-2 bg-cyan-900 text-white py-2 px-4 rounded-none mb-2 "
            >
              BOOKING →
            </button>
          </div>
        )}
      </div>

      <div className="w-full md:w-2/3 relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={filteredTours.length > 1} // Ensure loop only activates when there are multiple tours
          onSlideChange={handleSlideChange}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1.3,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {filteredTours.map((tour) => (
            <SwiperSlide key={tour._id}>
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleBookingClick(tour._id)}
              >
                <div className="w-full p-1">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className={`w-full object-cover rounded-lg ${
                      tour._id === filteredTours[activeIndex]?._id
                        ? "border-2 border-white"
                        : "border-transparent"
                    }`}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
