import Loader from "../../components/common/Loader";

const Button = ({loading, title}: any) => {
    return (
        <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-500 transition shadow-md disabled:bg-indigo-300"
        >
            {loading ? <Loader /> : title}
        </button>
    )
}

export default Button;