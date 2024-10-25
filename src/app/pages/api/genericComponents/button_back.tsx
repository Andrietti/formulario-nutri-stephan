import { FaArrowLeft } from "react-icons/fa6"

export default function ButtonVoltar({voltarPagina}: any){
    return(
        <div>
            <button onClick={voltarPagina} className="absolute top-4 left-4 text-gray-300 hover:text-white transition duration-200">
                <FaArrowLeft size={24}/>
            </button>
        </div>
    )
}