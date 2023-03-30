import React from 'react'
import fotoregistro from '../../assets/loginimg.png'

 export default function Nodisponible() {
    return(
        <React.Fragment>

            <div className="flex justify-between items-center">

                <div className='flex flex-col items-center'>
                    <h1 className='text-3xl mb-4 font-bold text-purple-800'>¡Lo sentimos!</h1>
                    <h2 className='text-2xl mb-4 font-bold text-center'>Debes iniciar sesión para acceder a esta función</h2>
                </div>
                <div className='flex flex-col items-center'>
                    <img className='' src={fotoregistro} alt='img5'/>
                </div>

            </div>
        
        </React.Fragment>

    )
}