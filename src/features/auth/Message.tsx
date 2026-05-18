const Message = ({message}: any) => {
    return (
        
        <div className= "bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-3 text-sm text-center" >
            {message}
        </div>
    
    );
};

export default Message;