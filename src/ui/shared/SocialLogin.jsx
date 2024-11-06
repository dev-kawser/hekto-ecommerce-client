import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {

    const { googleSignIn } = useAuth()

    const navigate = useNavigate();
    const location = useLocation();


    // Sign in with Google authentication
    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                const userInfo = {

                    email: result.user?.email,
                    name: result.user?.displayName,
                    photo: result.user?.photoURL,
                };

                console.log(userInfo);

                toast.success("Successfully Google Login");
                navigate(location?.state ? location.state : "/");
            })
            .catch(() => {
                toast.error("Google Sign-In failed");
            });
    };


    return (
        <button
            onClick={handleGoogleLogin}
            className="flex items-center gap-2 justify-center font-medium py-2 w-full border rounded-lg hover:scale-95 transition-all duration-500"
        >
            <span className="text-xl">
                <FcGoogle />
            </span>{" "}
            Sign in with Google
        </button>
    );
};

export default SocialLogin;