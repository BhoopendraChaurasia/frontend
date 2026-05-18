type Props = {
    openSignIn: () => void;
    openSignUp: () => void;
};

const LoginSignUpButton = ({ openSignIn, openSignUp }: Props) => {
    return (
        <div>
        <button
        onClick= { openSignIn }
    className = "hover:text-yellow-300 transition"
        >
        Login
        </button>

        < button
    onClick = { openSignUp }
    className = "bg-yellow-400 text-indigo-900 px-4 py-1 rounded-md hover:bg-yellow-300 transition"
        >
        Register
        </button>
        </div>
  );
};

export default LoginSignUpButton;