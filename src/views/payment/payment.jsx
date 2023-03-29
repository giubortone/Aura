import React from 'react'
import StripeContainer from '../../components/StripeContainer'

 export default function Payment() {
    return(
        <React.Fragment>
            <div className='flex justify-between items-center'>
                
                <div className='flex justify-between items-start w-full'>    
                    <img className='z-0' src='src\assets\Rectangle 1.png' alt='fondo morado'/>
                </div>

                
                    <div className='mr-auto mt-10 border-2 w-full'>
                        <h1 className='ml-4 text-2xl mb-4 font-bold mt-4'>Proceso de Pago</h1>
                        <br></br> 
                        <div className="mx-8 mb-4"><StripeContainer/> </div>
                    </div>
                    <dev className='mt-10 text-center mr-10 w-full'>
                        <h1 className='text-2xl mb-4 font-bold text-purple-900'>“Lo que haces hoy puede mejorar todos tus mañanas”</h1>
                        <h3 className='text-xl mb-4 font-bold text-gray-600'>~Ralph Marston</h3>
                    </dev>
   

            </div>
        </React.Fragment>

    )
}