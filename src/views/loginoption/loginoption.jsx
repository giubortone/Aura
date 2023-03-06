import React from 'react'

 export default function Loginoption() {
    return(
        <React.Fragment>

            <div className="flex justify-between items-center">

                <div className='flex flex-col items-center'>
                    <img className='' src='src\assets\SoyPsico.png' alt='img4'/>
                    <br></br>
                    <button  className='bg-violet-900 rounded-full p-2 px-4  text-white mr-4'>Soy Psicologo</button>
                </div>
                <div className='flex flex-col items-center'>
                    <img className='' src='src\assets\SoyPacie.png' alt='img5'/>
                    <br></br>
                    <button  className='bg-violet-900 rounded-full p-2 px-4  text-white mr-4'>Soy Paciente</button>
                </div>

            </div>
        
        </React.Fragment>

    )
}