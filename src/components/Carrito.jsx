import React from 'react'

function Carrito() {
    return (
        <div>
            <div className="fixed top-0 right-0 w-full max-w-md h-full bg-white z-50 shadow-lg flex flex-col">
                <div className="flex justify-between items-center p-4 border-b">
                    <div className="flex items-center gap-2 font-medium text-base">
                        <img src="https://chevignon.vtexassets.com/assets/vtex.file-manager-graphql/images/4ed64a5a-7b89-40af-b31c-d85a1fa51334___7d5edaf384c76655da436c7883e31b32.svg"
                            alt="Ícono bolsa"
                            className="w-5 h-5" />
                        <span>Mi bolsa</span>
                    </div>
                    <button className="text-xl cursor-pointer">✖️</button>
                </div>
                <div className="flex flex-col items-center justify-center text-center flex-grow px-4">
                    <img src="https://chevignon.vtexassets.com/assets/vtex.file-manager-graphql/images/4ed64a5a-7b89-40af-b31c-d85a1fa51334___7d5edaf384c76655da436c7883e31b32.svg"
                        alt="Bolsa vacía"
                        className="w-20 h-20 mb-4" />
                    <p className="text-sm text-gray-700 mb-6">Tu bolsa está vacía</p>
                    <a href="">
                        <button type='button' className="transform hover:-translate-y-1 bg-black text-white px-6 py-3 text-sm font-semibold shadow-lg rounded transition duration-200 hover:shadow-2xl active:scale-95 cursor-pointer">
                            Ver Nueva Colección
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Carrito