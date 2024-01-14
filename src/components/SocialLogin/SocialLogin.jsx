import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const handleGoogleSignIn = () => {};
  return (
    <div className="px-7">
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline btn-sm w-full mb-3"
      >
        <FaGoogle /> Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
