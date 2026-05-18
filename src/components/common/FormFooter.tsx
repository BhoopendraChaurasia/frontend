import { useNavigate } from "react-router-dom"; 

type ButtonProps = {
    title: string;
    onClick: () => void;
};

export const Button = ({ title, onClick }: ButtonProps) => {
    return <button onClick={ onClick }> { title } </button>;
};


export const FormFooter = () => {

    const navigate = useNavigate();
    const handleSignUp = () => navigate("/signup");
    return (
        <p className="text-sm text-center text-gray-600 mt-6">
        Don’t have an account ? 
            <span
                onClick = { handleSignUp }
                className="text-indigo-600 hover:underline cursor-pointer"
            >
            &nbsp;Register
            </span>
        </p>
    );
};