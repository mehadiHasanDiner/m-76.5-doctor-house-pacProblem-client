import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { createUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-4">Sign Up!</h1>
        </div>
        <div className="w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body -mb-8">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                placeholder="name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="mt-1 text-red-600">
                  This field is required
                </span>
              )}
            </div>
            {/* Photo URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Photo URL</span>
              </label>
              <input
                placeholder="Photo URL"
                className="input input-bordered"
                {...register("url", { required: true })}
              />
              {errors.url && (
                <span className="mt-1 text-red-600">
                  This field is required
                </span>
              )}
            </div>
            {/* email */}
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
            <div className="form-control mt-6">
              <input className="btn btn-success" type="submit" value="Submit" />
            </div>
          </form>
          <p className="divider"></p>
          <SocialLogin></SocialLogin>
          <p className="text-center mb-4">
            Already have account?{" "}
            <Link to="/login">
              <span className="link-accent font-bold"> Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
