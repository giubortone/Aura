import React from 'react'
import StripeContainer from '../../components/StripeContainer'

 export default function Payment() {
    return(
        <React.Fragment>
            <div className='flex justify-between'>
                
                <div className='flex justify-between items-start'>    
                    <img className='z-0' src='src\assets\Rectangle 1.png' alt='fondo morado'/>
                    <h1 className="mt-6 z-1 mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                      <img className='' src="src\assets\Luxi-Hosting-Logo.png" alt='logo'/>
                      Aura
                    </h1>
                </div>

                <div className='mr-64 mt-16'>
                    <h1 className='text-6xl mb-4 font-bold'>Proceso de Pago</h1>
                    <br></br> <br></br>
                    <StripeContainer/> 
                </div>

            </div>
        </React.Fragment>

    )
}