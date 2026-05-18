export type InputProps = {

    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

export type FormDataSignUp = {
    firstName : string;
    lastName : string;
    email : string;
    password: string;
    confirmPassword: string;
}

export type FormField = {
    type: string;
    name: keyof FormDataSignUp | string;
    placeholder: string;
}

export type FormDataSignIn = {
    username: string;
    password: string;
}

const Input = (props: InputProps) => {
    return (
        <input { ...props } className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
    );
};

export default Input;