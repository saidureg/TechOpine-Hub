import { FaFacebook, FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";
import { toast } from "react-toastify";
import GoogleLogin from "../../components/Shared/SocialLogin/GoogleLogin";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Login = () => {
  const { signIn, passwordReset } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const axiosPublic = useAxiosPublic();
  const { data: allUsers } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/allUsers");
      return data;
    },
  });

  const navigate = useNavigate();
  const location = useLocation();

  // const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error("Please Provide a valid email");
        // return swal("Oops!", "Please Provide a valid email", "error");
      }
      await signIn(email, password);
      const user = allUsers?.find((user) => user.email === email);

      let from;
      if (user.role === "admin") {
        from = location.state?.from?.pathname || "/dashboard/adminProfile";
      } else if (user.role === "moderator") {
        from = location.state?.from?.pathname || "/dashboard/moderatorProfile";
      } else {
        from = location.state?.from?.pathname || "/";
      }

      // if (user.role === "admin") {
      //   navigate("/dashboard/adminProfile", { replace: true });
      // } else if (user.role === "moderator") {
      //   navigate("/dashboard/moderatorProfile", { replace: true });
      // }
      // console.log("isAdmin:", isAdmin);
      // console.log("isModerator:", isModerator);
      // else {
      //   navigate(from, { replace: true });
      // }
      // navigate("/", { replace: true });
      navigate(from, { replace: true });
      toast("You have successfully logged in", {
        type: "success",
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error);
      swal("Oops!", "Email or Password are Incorrect", "error");
    }
  };
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  //     return swal("Oops!", "Please Provide a valid email", "error");
  //   }
  //   signIn(email, password)
  //     .then(() => {
  //       if (isAdmin) {
  //         navigate("/dashboard/statistics", { replace: true });
  //       } else if (isModerator) {
  //         navigate("/dashboard/productReview", { replace: true });
  //       } else {
  //         navigate(from, { replace: true });
  //       }
  //       // navigate(from, { replace: true });
  //       toast("You have successfully logged in");
  //     })
  //     .catch((error) => {
  //       swal("Oops!", error.message, "error");
  //     });
  // };

  const handleForgotPassword = () => {
    swal({
      title: "Forgot Password?",
      text: "Enter your email to get a password reset link",
      content: "input",
      buttons: ["Cancel", "Send Email"],
    }).then((value) => {
      if (value) {
        passwordReset(value)
          .then(() => {
            swal("An email has been sent to your email address", {
              icon: "success",
            });
          })
          .catch(() => {
            swal("Oops!", "Enter a valid email", "error");
          });
      }
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-24 lg:mt-44">
      <Helmet>
        <title>TechOpine | SignIn</title>
      </Helmet>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md md:w-[500px] mx-auto rounded-xl bg-clip-border">
        <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border shadow-pink-500/40">
          <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
            Login to your account
          </h3>
        </div>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-4 p-6 space-y-3">
            <div className="form-control relative h-11 w-full min-w-[200px] mb-2">
              <input
                type="email"
                name="email"
                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=""
                required
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email*
              </label>
            </div>
            <div className="form-control relative h-11 w-full min-w-[200px] mb-2 flex flex-row">
              <input
                type={isOpen ? "text" : "password"}
                name="password"
                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=""
                required
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Password*
              </label>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="absolute right-0 top-0 h-full w-10 flex items-center justify-center text-blue-gray-400"
              >
                {isOpen ? <FaRegEyeSlash /> : <FaRegEye />}
              </div>
            </div>
            <p
              onClick={handleForgotPassword}
              className="text-gray-500 cursor-pointer hover:text-pink-500 font-medium "
            >
              Forgot Password?
            </p>
          </div>
          <div className="form-control p-6 pt-0">
            <button
              className="block w-full select-none rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="divider divider-secondary px-6">OR</div>
        <div className="p-6 pt-0">
          <p className="flex justify-center mt-2 text-lg antialiased font-light leading-normal text-inherit">
            Do not have an account?
            <Link to="/register">
              <span className="block ml-1 antialiased font-bold leading-normal text-pink-500 hover:underline">
                Sign up
              </span>
            </Link>
          </p>
          <p className="text-center mt-4 font-playfair text-xl">
            Or continue with
          </p>
          <div className="flex items-center gap-8 justify-center mt-3">
            <FaFacebook className="text-5xl border rounded-full border-pink-500 p-2" />
            <GoogleLogin />
            <FaGithub className="text-5xl border rounded-full border-pink-500 p-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
