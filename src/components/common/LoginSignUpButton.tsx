const LoginSignUpButton = ({ openSignIn, openSignUp }) => {
    return (
        <div>
            <button onClick={OpenSignIn} className="hover:text-yellow-300 transition">
                Login
            </button>
            <button onClick={OpenSignUp} className="bg-yellow-400 text-indigo-900 px-4 py-1 rounded-md hover:bg-yellow-300 transition">
                Register
            </button>
        </div>
    );
};

export default LoginSignUpButton;