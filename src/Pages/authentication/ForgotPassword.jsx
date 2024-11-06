import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import PrimaryButton from "../../ui/shared/PrimaryButton";

const ForgotPassword = () => {

    // const { resetPassword } = useAuth()


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

        const email = (data.email)

        console.log(email);

        // resetPassword(email)
        //     .then(() => {

        //         toast.success("Please check you email for reset password")
        //         reset()

        //     })

    };

    return (
        <div className="container relative mt-10 lg:mt-20">
            <div className="max-w-md mx-auto text-center">
                <h3 className="mb-6">Reset Your Password</h3>
                <p className="mb-6">
                    Enter the email associated with your account, and we’ll send you a link to reset your password.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-left font-medium pb-1">
                            Email*
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: "Email is not valid",
                                },
                            })}
                            className="input border rounded py-2 px-2 input-bordered w-full"
                        />
                        {errors.email && (
                            <p className="text-red text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    <PrimaryButton title={"Send Reset Link"} />

                    <p className="mt-4 text-sm">
                        Remember your password?{" "}
                        <Link to="/login" className="text-navyBlue underline">
                            Login
                        </Link>
                    </p>

                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
