import { useContext } from "react";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "LOGIN SUCCESSFULL ",
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <>
      <Helmet>
        <title>Tour | Login</title>
      </Helmet>
      <div className="hero banner min-h-screen mt-6 lg:mt-8 ">
        <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-4xl mx-auto">
          <div className="text-center lg:text-left text-white lg:w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              provident itaque accusamus rerum odit enim. Architecto pariatur
              adipisci eum consectetur officia aperiam incidunt earum, obcaecati
              laboriosam reprehenderit asperiores quae aliquid.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-1">
                <input
                  disabled={false}
                  className="btn  bg-cyan-900 hover:bg-cyan-900 border-none rounded-none text-white mt-1"
                  type="submit"
                  value="LOGIN"
                />
              </div>
            </form>
            <div className="text-center">
              <Link to="/signup">
                <small>New here? Create a New Account</small>
              </Link>
            </div>

            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

