import React from 'react'

 export default function Register() {
    return(
        <React.Fragment>

            <dev className='flex justify-between'>
                <dev>
                    <section class="">
  <                     div class="items-center justify-center px-6 py-8">
                           <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-purple-900">
                               <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                   <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-purple-900 md:text-2xl dark:text-purple-900">
                                       Crea tu cuenta
                                   </h1>
                                   <form class="space-y-4 md:space-y-6" action="#">

                                        <div class="relative z-0 w-full mb-6 group">
                                            <input type="name" name="floating_name" id="floating_name" class="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:border-purple-600 dark:focus:border-purple-900 focus:outline-none focus:ring-0 focus:border-purple-900 peer" placeholder="NOMBRE COMPLETO" required />
                                            <label for="floating_name" class="peer-focus:font-medium absolute text-sm text-purple-900 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-900 peer-focus:dark:text-purple-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                                        </div>

                                        <div class="relative z-0 w-full mb-6 group">
                                            <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:border-purple-600 dark:focus:border-purple-900 focus:outline-none focus:ring-0 focus:border-purple-900 peer" placeholder="EMAIL" required />
                                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-purple-900 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-900 peer-focus:dark:text-purple-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                                        </div>

                                        <div className='flex justify-between'>

                                            <div class="relative z-0 w-full mb-6 group">
                                                <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:border-purple-600 dark:focus:border-purple-900 focus:outline-none focus:ring-0 focus:border-purple-900 peer" placeholder="••••••••" required />
                                                <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-purple-900 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-900 peer-focus:dark:text-purple-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                                            </div>

                                            <div class="relative z-0 w-full mb-6 group">
                                                <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:border-purple-600 dark:focus:border-purple-900 focus:outline-none focus:ring-0 focus:border-purple-900 peer" placeholder="••••••••" required />
                                                <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-purple-900 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-900 peer-focus:dark:text-purple-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                                            </div>

                                        </div>
                                    
                                       <div class="flex items-start">
                                           <div class="flex items-center h-5">
                                             <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                           </div>
                                           <div class="ml-3 text-sm">
                                             <label for="terms" class="font-light text-gray-500 dark:text-gray-300">He leído y acepto <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">los terminos de Servicio, privacidad y politica Aura *</a></label>
                                           </div>
                                       </div>
                
                                   </form>
                               </div>
                           </div>
                        </div>
                    </section>
                </dev>

                <dev className='mt-16 text-center mr-20'>
                    <h1 className='text-3xl mb-4 font-bold text-purple-900'>“Para y date una oportunidad a ti mismo”</h1>
                    <h3 className='text-xl mb-4 font-bold text-gray-600'>~Aaron Beck</h3>
                    <br></br>
                    <img className='rounded-lg' src='src\assets\photo-register1.png' alt='foto registro'/>
                    <br></br>
                </dev>
            </dev>
        
        </React.Fragment>

    )
}