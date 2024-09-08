import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from "react-hook-form";
import { addDays } from "date-fns";

const Booking = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false); // New state for form validation
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    watch, // Hook to monitor form changes
  } = useForm();

  useEffect(() => {
    const loadTourDetails = async () => {
      try {
        const response = await fetch(
          `https://tourser-zshohags-projects.vercel.app/tours/${id}`
        );
        const data = await response.json();

        if (response.ok) {
          setTour(data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error fetching tour:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTourDetails();
  }, [id]);

  useEffect(() => {
    // Function to validate form dates
    const isDateRangeValid = ({ from, to }) => {
      return from && to && from < to;
    };

    // Subscribe to form changes
    const subscription = watch((formValues) => {
      const isFormValid = isDateRangeValid(formValues);
      setIsFormValid(isFormValid);
    });

    // Cleanup subscription on component unmount
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data) => {
    console.log("Booking data:", data);
    navigate(`/bookings/${id}/hotelbooking`, { state: { tour, ...data } });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="flex justify-center items-center h-screen">
        Tour not found
      </div>
    );
  }

  return (
    <div className="container mx-auto m-10 p-4 flex justify-center items-center">
      <div className="grid grid-cols-1 xl:grid-cols-6 gap-2 items-center">
        <div className="col-span-6 xl:col-span-3">
          <div className="bg-transparent">
            <h1 className="text-5xl text-white">{tour.name}</h1>
            <p className="mt-4 text-white">{tour.description}</p>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="mt-2 bg-cyan-900 text-white py-2 px-4 rounded-none mb-2"
            >
              HOME →
            </button>
          </div>
        </div>
        <div className="hidden xl:block col-span-1" />
        <div className="col-span-6 xl:col-span-2">
          <div className="card bg-base-100 shadow-xl rounded-none">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block">Origin</label>
                  <input
                    type="text"
                    className="input input-bordered w-full rounded-none"
                    placeholder="Origin"
                    defaultValue="Dhaka"
                    {...register("origin", { required: "Origin required" })}
                  />
                  {errors?.origin && (
                    <span className="text-red-500">
                      {errors.origin.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block">Destination</label>
                  <input
                    type="text"
                    className="input input-bordered w-full rounded-none"
                    placeholder="Destination"
                    readOnly
                    defaultValue={tour.name}
                    {...register("destination", {
                      required: "Destination required",
                    })}
                  />
                  {errors?.destination && (
                    <span className="text-red-500">
                      {errors.destination.message}
                    </span>
                  )}
                </div>

                <div className="flex justify-between space-x-2">
                  <div className="w-1/2">
                    <label className="block">From</label>
                    <Controller
                      control={control}
                      name="from"
                      rules={{ required: "From date required" }}
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <ReactDatePicker
                          className="input input-bordered w-full rounded-none"
                          placeholderText="From"
                          minDate={new Date()}
                          maxDate={addDays(new Date(), 7)}
                          dateFormat="dd/MM/yyyy"
                          selected={value}
                          onChange={(date) => onChange(date)}
                          onBlur={onBlur}
                          ref={ref}
                        />
                      )}
                    />
                    {errors?.from && (
                      <span className="text-red-500">
                        {errors.from.message}
                      </span>
                    )}
                  </div>

                  <div className="w-1/2">
                    <label className="block">To</label>
                    <Controller
                      control={control}
                      name="to"
                      rules={{
                        required: "To date required",
                        validate: () =>
                          getValues("from") < getValues("to") ||
                          "To date must be after From date",
                      }}
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <ReactDatePicker
                          className="input input-bordered w-full rounded-none"
                          placeholderText="To"
                          minDate={new Date()}
                          maxDate={addDays(new Date(), 21)}
                          dateFormat="dd/MM/yyyy"
                          selected={value}
                          onChange={(date) => onChange(date)}
                          onBlur={onBlur}
                          ref={ref}
                        />
                      )}
                    />
                    {errors?.to && (
                      <span className="text-red-500">{errors.to.message}</span>
                    )}
                  </div>
                </div>

                <input
                  type="hidden"
                  value={tour.id}
                  {...register("id", { required: true })}
                />

                <button
                  type="submit"
                  className="btn bg-cyan-900 hover:bg-cyan-900 text-white w-full rounded-none"
                  disabled={!isFormValid} // Disable button when form is invalid
                >
                  Start Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
