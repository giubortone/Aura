import React from 'react'
import psico from '../../assets/SoyPsico.png';
import paci from '../../assets/SoyPacie.png';

 export default function Loginoption() {
    return(
        <React.Fragment>

            <div className="flex justify-between items-center">

                <div className='flex flex-col items-center'>
                    <img className='' src={psico} alt='img4'/>
                    <br></br>
                    <button  className='bg-purple-900 rounded-full p-2 px-4  text-white mr-4'>Soy Psicologo</button>
                </div>
                <div className='flex flex-col items-center'>
                    <img className='' src={paci} alt='img5'/>
                    <br></br>
                    <button  className='bg-purple-900 rounded-full p-2 px-4  text-white mr-4'>Soy Paciente</button>
                </div>

            </div>
        
        </React.Fragment>

    )
}