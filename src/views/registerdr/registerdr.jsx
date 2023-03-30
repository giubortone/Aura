import React from 'react'
import photoregisterdr from '../../assets/registerdr.png'

 export default function Registerdr() {
    return(
        <React.Fragment>

            <dev className='flex justify-between items-center'>
                <dev>
                    <section class="ml-60">
                        <div class="items-center justify-center px-6 py-8">
                           <div class="w-max bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-purple-900">
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
                                            <input type="FPV" name="floating_FPV" id="floating_FPV" class="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:border-purple-600 dark:focus:border-purple-900 focus:outline-none focus:ring-0 focus:border-purple-900 peer" placeholder="FPV" required />
                                            <label for="floating_FPV" class="peer-focus:font-medium absolute text-sm text-purple-900 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-900 peer-focus:dark:text-purple-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                                        </div>

                                        <div class="relative z-0 w-full mb-6 group">
                                            <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:border-purple-600 dark:focus:border-purple-900 focus:outline-none focus:ring-0 focus:border-purple-900 peer" placeholder="EMAIL" required />
                                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-purple-900 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-900 peer-focus:dark:text-purple-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                                        </div>

                                        <div className='flex justify-between'>

                                            <div class="relative z-0 w-full mb-6 group mr-4">
                                                <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:border-purple-600 dark:focus:border-purple-900 focus:outline-none focus:ring-0 focus:border-purple-900 peer" placeholder="Contraseña" required />
                                                <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-purple-900 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-900 peer-focus:dark:text-purple-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                                            </div>

                                            <div class="relative z-0 w-full mb-6 group">
                                                <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:border-purple-600 dark:focus:border-purple-900 focus:outline-none focus:ring-0 focus:border-purple-900 peer" placeholder="Repite tu contraseña" required />
                                                <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-purple-900 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-900 peer-focus:dark:text-purple-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                                            </div>

                                        </div>

                                        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                          <p className="mx-4 mb-0 text-center font-semibold text-neutral-300">
                                            O ingresa con tu cuenta
                                          </p>
                                        </div>

                                        <div className="flex flex-row items-center justify-center lg:justify-center">
                                        <button
                                          type="button"
                                          data-te-ripple-init
                                          data-te-ripple-color="light"
                                          className="bg-blue-700 mx-2 h-9 w-14 rounded-lg bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                          {/* <!-- Facebook --> */}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mx-auto h-3.5 w-3.5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                          </svg>
                                        </button>

                                        <button
                                          type="button"
                                          data-te-ripple-init
                                          data-te-ripple-color="light"
                                          className="bg-cyan-400 mx-2 h-9 w-14 rounded-lg bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                          {/* <!-- Twitter --> */}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mx-auto h-3.5 w-3.5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                          </svg>
                                        </button>

                                        <button
                                          type="button"
                                          data-te-ripple-init
                                          data-te-ripple-color="light"
                                          className="bg-red-500 mx-2 h-9 w-14 rounded-lg bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                          {/* <!-- Google --> */}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mx-auto h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                              d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" />
                                          </svg>
                                        </button>

                                    </div>

                                    <div className='flex justify-between items-center'>
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                              <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                            </div>
                                            <div class="ml-3 text-sm">
                                              <label for="terms" class="font-light">He leído y acepto <a class="font-medium text-purple-900 hover:underline dark:text-purple-900" href="#">los terminos de Servicio, privacidad y politica Aura*</a></label>
                                            </div>
                                        </div>

                                        <div>
                                            <button className='bg-purple-900 rounded-full p-2 px-10 text-white ml-4 flex justify-center'>
                                                Confirmar
                                            </button>
                                        </div>
                                    </div>

                                   </form>
                               </div>
                           </div>
                        </div>
                    </section>
                </dev>

                <dev className='mt-16 text-center mr-60'>
                    <h1 className='text-3xl mb-4 font-bold text-purple-900'>“Tú eres aquello que haces, no aquello que dices que harás”</h1>
                    <h3 className='text-xl mb-4 font-bold text-gray-600'>~C.G. Jung</h3>
                    <br></br>
                    <img className='rounded-lg' src={photoregisterdr} alt='foto registro'/>
                    <br></br>
                </dev>
            </dev>
        
        </React.Fragment>

    )
}