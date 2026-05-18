import { useState, type FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "./registerSlice";
import type { RegisterPayload } from "../types/common";
import Input, { type FormField, type FormDataSignUp } from "./Input";
import type { AppDispatch, RootState } from "../store/store";
import Social from "./Social";
import Button from "./Button";
import FormFooter from "./FormFooter";
import Message from "./Message";
import Divider from "./Divider";
import FormTitle from "./FormTitle";
import FormGreet from "./FormGreet";


const SignUp: FC = () => {
    
    const dispatch = useDispatch<AppDispatch>();

    const { loading, error } = useSelector(
        (state: RootState) => state.register
    );

    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/signin");
    }

    const [formData, setFormData] = useState<FormDataSignUp>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const { confirmPassword, ...rest } = formData;

        const payload: RegisterPayload = {
            ...rest,
            username: formData.firstName, // better than firstName
            roles: "TRAINER",
        };

        const resultAction = await dispatch(registerUser(payload));

        if (registerUser.fulfilled.match(resultAction)) {
            navigate("/signin");
        }
    };

    const formFields: FormField[] = [
        {type: "text", name: "firstName", placeholder: "First Name" },
        {type: "text", name: "lastName", placeholder: "Last Name"},
        {type: "text", name: "email", placeholder: "Email"},
        {type: "password", name: "password", placeholder: "Password"},
        {type: "password", name: "confirmPassword", placeholder: "Confirm Password" },
    ];

    return (
        <div className= "min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 px-4" >
            <div className="bg-white p-8 my-15 rounded-2xl shadow-2xl w-full max-w-md">
                {/* Header */ }
                { error !== null && <Message message={ error } /> }
                <FormTitle title="Create Account" />
                <FormGreet text="Join us and start your journey 🚀" /> 
                {/* Social Login */ }
                <Social />
                {/* Divider */ }
                <Divider />
                {/* Form */ }
                <form onSubmit={ handleSubmit } className = "space-y-4" >
                    {formFields.length > 0 && formFields.map(field => (
                        <Input
                            key={field.name}
                            {...field}
                            value = { formData[field.name as keyof FormDataSignUp] }
                            onChange = { handleChange }
                        />
                    ))}
                    <Button loading={ loading } title="Create Account" />
                </form>
                {/* Footer */ }
                <FormFooter text="Already have an account ? " routeTitle = "Login" onClick = { handleSignIn } />
            </div>
        </div>
    )
};
export default SignUp;
