import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await createUser(data.email, data.password);
      const loggedUser = result.user;
      console.log(loggedUser);

      await updateUserProfile(data.name, data.photoURL);

      // Save user data to the database
      const saveUser = { name: data.name, email: data.email };
      const res = await fetch(
        "https://tourser-zshohags-projects.vercel.app/users",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(saveUser),
        }
      );
      const saveResult = await res.json();

      if (saveResult.insertedId) {
        reset();
        Swal.fire({
          icon: "success",
          title: "USER CREATED SUCCESSFULLY",
          confirmButtonText: "OK",
        });
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong during sign up.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Tour | Sign Up</title>
      </Helmet>
      <div className="hero banner min-h-screen mt-8 px-4 lg:px-0">
        <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-5xl mx-auto">
          <div className="text-center lg:text-left text-white lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold">Sign Up now!</h1>
            <p className="mt-4 lg:mt-2 text-sm lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo est
              possimus maxime repellat labore corporis illum modi aut veritatis,
              vel odit. Fugit impedit vel neque!
            </p>
          </div>

          <div className="card w-full lg:w-1/2 max-w-lg bg-base-100 rounded-none shadow-lg mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* Name Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>

              {/* Email Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
                {errors.email && (
                  <span className="text-red-600">Valid email is required</span>
                )}
              </div>

              {/* Photo URL Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>

              {/* Password Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  placeholder="Password"
                  className="input input-bordered w-full"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">
                    Password must be at least 6 characters long
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="form-control mt-4">
                <input
                  type="submit"
                  value={loading ? "Signing Up..." : "SIGN UP"}
                  className={`btn bg-cyan-900 hover:bg-cyan-900 border-none rounded-none text-white ${
                    loading ? "loading" : ""
                  }`}
                  disabled={loading}
                />
              </div>
            </form>
            <div className="text-center mb-2">
              <Link to="/login">
                <small>Already registered? Go to log in</small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
