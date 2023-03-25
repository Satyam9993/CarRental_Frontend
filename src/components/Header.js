import {Link} from 'react-router-dom';
const Car_icon = require("../imgs/CarGif.gif");

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mb-1">
            <div className="flex justify-center">
                <img 
                    alt="Car GIF"
                    className="h-72 "
                    src={Car_icon}/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-300">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-200 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}