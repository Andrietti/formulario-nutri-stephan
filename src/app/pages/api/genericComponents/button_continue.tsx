export default function ButtonContinue({button_event}: any){

    return(
    <div className="div-botoes mt-6 mb-3 space-x-4">
                    
        <button onClick={button_event} className="bg-gradient-to-r from-gray-900 to-gray-600 text-white font-bold py-1 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            Continuar
        </button>
    </div>
    )
}