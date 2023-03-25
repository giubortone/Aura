import React from 'react'

 export default function Search() {
    return(
        <React.Fragment>
        <br></br>
        <h1 className='ml-8'>Doctores</h1>

        <br></br>

        <form>   
            <label for="default-search" className="mb-2 text-sm font-medium sr-only">Search</label>
            <div className="relative bg-violet-100 ">
                <br></br>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                
                <input type="search" id="default-search" className="ml-12 block w-4/12 p-3 pl-10 text-sm border  rounded-lg bg-neutral-200 focus:ring-white focus:white dark:bg-white dark:border-violet-100 dark:placeholder-purple-900 dark:focus:ring-blue-200 dark:focus:border-blue-200" placeholder="Buscar por doctor" required/>
                
                <button type="submit" className="text-purple-900 absolute right-2.5 bottom-6 bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-bg-purple-900 font-medium rounded-lg text-sm px-10 py-2 dark:bg-bg-purple-900  dark:hover:bg-bg-purple-900  dark:focus:ring-white mr-auto">Filtrar</button>
                <br></br>
            </div>
        </form>

        <br></br>

        <div class="relative overflow-x-auto sm:rounded-lg flex justify-center">
            <table class="w-10/12 text-sm text-left border ">
                <thead class="text-xs text-gray-700 uppercase bg-violet-200 dark:bg-violet-200 dark:text-purple-900">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Doctor
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Especialización
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Edad
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Disponibilidad actual
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-purple-100 border-b dark:bg-gray-100 dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-200">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Daniel Alvarado
                        </th>
                        <td class="px-6 py-4">
                            Psicología Biológica
                        </td>
                        <td class="px-6 py-4">
                            29
                        </td>
                        <td class="px-6 py-4">
                            <svg class="h-8 w-8 text-green-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>

                        </td>
                    </tr>

                    <tr class="bg-purple-100 border-b dark:bg-gray-100 dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-200">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Alexandre Camara
                        </th>
                        <td class="px-6 py-4">
                            Psicología Clínica
                        </td>
                        <td class="px-6 py-4">
                            27
                        </td>
                        <td class="px-6 py-4">
                        <svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <path d="M10 10l4 4m0 -4l-4 4" /></svg>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <br></br>

        </React.Fragment>

    )
}