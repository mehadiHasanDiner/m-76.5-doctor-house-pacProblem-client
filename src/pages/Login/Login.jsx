import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  //TODO: useState should be true.
  const [disabled, setDisabled] = useState(false);

  const handleCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-4">Login now!</h1>
        </div>
        <div className="w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body -mb-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="mt-1 text-red-600">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="mt-1 text-red-600">
                  This field is required
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  <LoadCanvasTemplate />
                </span>
              </label>
              <input
                type="text"
                name="captcha"
                placeholder="type the above captcha"
                className="input input-bordered"
                onBlur={handleCaptcha}
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-success"
                type="submit"
                disabled={disabled}
                value="Submit"
              />
            </div>
          </form>
          <p className="divider"></p>
          <SocialLogin></SocialLogin>
          <p className="text-center mb-4 ">
            New user?{" "}
            <Link to="/signup">
              <span className="link-accent font-bold"> Please Register</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
