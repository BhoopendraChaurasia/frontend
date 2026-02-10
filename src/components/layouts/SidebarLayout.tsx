import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import {useState} from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

export default function SidebarLayout() {
    const [isOpen, setIsOpen] = useState(true);
    const handleLink = () => setIsOpen(!isOpen);
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(params);
    console.log(navigate);
    console.log(location);
    navigate(`${location.pathname}/introduction`);
    return (
        <>
            <div className="flex">
                <div className="w-60 flex-none">
                    <div onClick={handleLink} className="bg-gray-100 flex">
                        <h1 className="my-3 mx-3 font-semibold flex">Introduction {isOpen ? <IoIosArrowForward className="float-right" /> : <IoIosArrowDown />}</h1>
                    </div>
                    <div onClick={handleLink} className="bg-gray-100 flex">
                        <h1 className="my-3 mx-3 font-semibold flex">Introduction {isOpen ? <IoIosArrowForward className="float-right" /> : <IoIosArrowDown />}</h1>
                    </div>
                    <div onClick={handleLink} className="bg-gray-100 flex">
                        <h1 className="my-3 mx-3 font-semibold flex">Introduction {isOpen ? <IoIosArrowForward className="float-right" /> : <IoIosArrowDown />}</h1>
                    </div>
                    <div onClick={handleLink} className="bg-gray-100 flex">
                        <h1 className="my-3 mx-3 font-semibold flex">Introduction {isOpen ? <IoIosArrowForward className="float-right" /> : <IoIosArrowDown />}</h1>
                    </div>
                    <div onClick={handleLink} className="bg-gray-100 flex">
                        <h1 className="my-3 mx-3 font-semibold flex">Introduction {isOpen ? <IoIosArrowForward className="float-right" /> : <IoIosArrowDown />}</h1>
                    </div>
                    
                </div>
                <div className="w-256 flex bg-red-400 items-center justify-center h-screen">
                    <div>fsdgs</div>
                </div>
            </div>
        </>
    );
}