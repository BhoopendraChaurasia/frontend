type props = {

    text: string;
    routeTitle: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;

};

const FormFooter = ({ text, routeTitle, onClick,  }: props) => {
    return (
        <p className="text-sm text-center text-gray-600 mt-6">
           {text}
            <span
                onClick={ onClick }
                className="text-indigo-600 hover:underline cursor-pointer"
            >
                &nbsp;{routeTitle}
            </span>
        </p>
    );
};

export default FormFooter;