import {type InputProps} from "./auth.types";

const Input = (props: InputProps) => {
    return (
        <input { ...props } className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
    );
};

export default Input;