import React from 'react'
import SignUp from '../../components/SignUp'
import photoregister from '../../assets/photo-register1.png'

 export default function Register() {
    return(
        <React.Fragment>

            <div className='flex justify-between items-center'>
                <div>
                    <section class="ml-60">
                        <div class="items-center justify-center px-6 py-8">
                           <div class="w-max bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-purple-900">
                               <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                   <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-purple-900 md:text-2xl dark:text-purple-900">
                                       Crea tu cuenta
                                   </h1>
                                   <SignUp/>
                               </div>
                           </div>
                        </div>
                    </section>
                </div>

                <div className='mt-16 text-center mr-60'>
                    <h1 className='text-3xl mb-4 font-bold text-purple-900'>“Para y date una oportunidad a ti mismo”</h1>
                    <h3 className='text-xl mb-4 font-bold text-gray-600'>~Aaron Beck</h3>
                    <br></br>
                    <img className='rounded-lg' src={photoregister} alt='foto registro'/>
                    <br></br>
                </div>
            </div>
        
        </React.Fragment>

    )
}