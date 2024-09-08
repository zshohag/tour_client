import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../pages/providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);

        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
        };

        fetch("https://tourser-zshohags-projects.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.insertedId) {
              Swal.fire({
                icon: "success",
                title: "Google Sign-In Successful",
                confirmButtonText: "OK",
              });

              navigate(from, { replace: true });
            }
          });

        navigate(from, { replace: true });
      })
      .catch(() => {});
  };

  return (
    <div>
      <div className="w-full text-center m-2 ">
        <button>
          <div>
            <div
              className="flex items-center space-x-2 justify-center rounded-lg w-full py-3 cursor-pointer"
              onClick={handleGoogleSignIn}
            >
              <FcGoogle className="w-6 h-6" />
              <span className="poppins">Sign In With Google</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

