import { useState, useEffect, type FC } from "react";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { clearError, loginUser } from "./authSlice";
import Input, { type FormField, type FormDataSignIn } from "./Input";
import Button from "./Button";
import FormFooter from "./FormFooter";
import Message from "./Message";
import Social from "./Social";
import Divider from "./Divider";
import FormTitle from "./FormTitle";
import FormGreet from "./FormGreet";


const SignIn: FC = () => {
    const navigate: NavigateFunction = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { loading, error } = useSelector((state: RootState) => state.auth);
    const [formData, setFormData] = useState<FormDataSignIn>({
        username: "", 
        password: ""
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                dispatch(clearError());
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [error, dispatch]);
    const handleSignUp = () => {
        navigate("/signup");
    };
    const handleSubmit = async(e: React.SubmitEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        
        const result = await dispatch(loginUser(formData));

        if (loginUser.fulfilled.match(result)) {
            navigate("/");
        }
    };
    
    const inputFields: FormField[] = [
        { type: "text", name: "username", placeholder: "Username" },
        { type: "password", name: "password", placeholder: "Password" },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 px-4">
            <div className="bg-white p-8 my-16 rounded-2xl shadow-2xl w-full max-w-md">
                {/* Header */}
                <FormTitle title="Sign In Account" />
                <FormGreet text="Welcome back 🚀" />
                {/* Social Login */}
                <Social />
                {/* Divider */}
                <Divider />
                {/* Error Message */}
                {error && <Message message={error} />}
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    { inputFields.length > 0 && inputFields.map(field => (
                        <Input 
                            key={field.name}
                            { ...field }
                            value={formData[field.name as keyof FormDataSignIn]}
                            onChange={handleChange}
                        />
                    ))}
                    <Button loading={loading} title="Sign In" />
                </form>
                {/* Footer */}
                <FormFooter text="Don’t have an account ?" routeTitle="Register" onClick={ handleSignUp } />
            </div>
        </div>
    );
};

export default SignIn;