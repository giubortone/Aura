import React from 'react'
import SignIn from '../../components/SignIn'
import fotoregistro from '../../assets/loginimg.png'

 export default function Login() {
    return(
        <React.Fragment>

            <dev className='flex justify-between items-center'>
                <dev>
                    <section class="ml-60">
                        <div class="items-center justify-center px-6 py-8">
                           <div class="w-max bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-purple-900">
                               <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                   <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-purple-900 md:text-2xl dark:text-purple-900">
                                       Inicio de sesión
                                   </h1>
                                    <SignIn></SignIn>
                                   <a href='.\register'>
                                        <button className='bg-violet-500 rounded-full p-2 px-20 text-white ml-11 flex justify-center'>
                                            Registrarse
                                        </button>
                                    </a>
                               </div>
                           </div>
                        </div>
                    </section>
                </dev>

                <dev className='mt-16 text-center mr-60'>
                    <h1 className='text-3xl mb-4 font-bold text-purple-900'>“El anhelo de cuidarnos constituye la mitad de nuestra salud”</h1>
                    <h3 className='text-xl mb-4 font-bold text-gray-600'>~Séneca</h3>
                    <br></br>
                    <img className='rounded-lg ' src={fotoregistro} alt='foto registro'/>
                    <br></br>
                </dev>
            </dev>
        
        </React.Fragment>

    )
}