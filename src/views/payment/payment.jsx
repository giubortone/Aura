import React from 'react'

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
                    <h1 className='text-6xl mb-4 font-bold'>Payment Informations</h1>
                    <br></br> <br></br>

                    <form>

                        <h2 className='text-purple-900 font-bold text-xl'>MÉTODOS DE PAGO</h2>
                        <label for="methods" class="block mb-2 text-sm font-medium text-purple-900"></label>
                        <select id="methods" class="border border-b-purple-900 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 ">
                          <option selected></option>
                          <option value="x">x</option>
                          <option value="y">y</option>
                          <option value="z">z</option>
                          <option value="w">w</option>
                        </select>
                        <br></br> <br></br>

                        <div class="relative z-0 w-full mb-6 group">
                            <h2 className='text-purple-900 font-bold text-xl'>NOMBRE</h2>
                            <input type="name" name="floating_name" id="floating_name" class="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:border-purple-600 dark:focus:border-purple-900 focus:outline-none focus:ring-0 focus:border-purple-900 peer" placeholder=" " required />
                            <label for="floating_name" class="peer-focus:font-medium absolute text-sm text-purple-900 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-900 peer-focus:dark:text-purple-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                        </div>
                        <br></br>

                        <div class="input_text mt-8 relative"> 
                            <h2 className='text-purple-900 font-bold text-xl'>NÚMERO DE TARJETA</h2>
                            <input type="text" class="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:border-purple-600 dark:focus:border-purple-900 focus:outline-none focus:ring-0 focus:border-purple-900 peer" placeholder="0000 0000 0000 0000" /> 
                            <label for="floating_text" class="peer-focus:font-medium absolute text-sm text-purple-900 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-900 peer-focus:dark:text-purple-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label> 
                        </div>
                        <br></br><br></br>

                        <div className="flex justify-between"> 
                            <div>
                                <h2 className='text-purple-900 font-bold text-xl'>FECHA DE EXPIRACIÓN</h2> 
                                <div className="flex justify-between">
                                    <div>
                                        <select id="methods" class="border border-b-purple-900 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 ">
                                          <option selected></option>
                                          <option value="1">01</option>
                                          <option value="2">02</option>
                                          <option value="3">03</option>
                                          <option value="4">04</option>
                                          <option value="5">05</option>
                                          <option value="6">06</option>
                                          <option value="7">07</option>
                                          <option value="8">08</option>
                                          <option value="9">09</option>
                                          <option value="10">10</option>
                                          <option value="11">11</option>
                                          <option value="12">12</option>
                                        </select>
                                    </div>

                                    <div>
                                        <select id="methods" class="border border-b-purple-900 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 ">
                                          <option selected></option>
                                          <option value="22">2022</option>
                                          <option value="23">2023</option>
                                          <option value="24">2024</option>
                                          <option value="25">2025</option>
                                          <option value="26">2026</option>
                                          <option value="27">2027</option>
                                        </select>
                                    </div>

                                </div>
                            </div>

                            <div>
                                <h2 className='text-purple-900 font-bold text-xl'>CÓDIGO</h2> 
                                <input type="text" class="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:border-purple-600 dark:focus:border-purple-900 focus:outline-none focus:ring-0 focus:border-purple-900 peer" placeholder="000" /> 
                                <label for="floating_text" class="peer-focus:font-medium absolute text-sm text-purple-900 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-900 peer-focus:dark:text-purple-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label> 
                            </div>

                        </div>
                        <br></br> <br></br> <br></br> <br></br>

                        <div className="flex justify-between">
                            <button className='bg-purple-900 rounded-full p-2 px-24 text-white ml-4 flex justify-center'>
                                Confirmar
                            </button>

                            <button className=''>
                                <img className='' src='src\assets\paypal.png' alt='Paypal'/>
                            </button>

                        </div>

                    </form>
                </div>

            </div>
        </React.Fragment>

    )
}