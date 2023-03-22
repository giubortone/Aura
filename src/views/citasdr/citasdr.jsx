import React from 'react'

 export default function Citasdr() {
    return(
        <React.Fragment>
        <div className='bg-violet-100 py-2'></div>
        <h1 className='ml-8'>Citas agendadas</h1>
        <div className='bg-violet-100 py-2'></div>
        <br></br>

        <div class="relative overflow-x-auto sm:rounded-lg flex justify-center">
            <table class="w-10/12 text-sm text-left border ">
                <thead class="text-xs text-gray-700 uppercase bg-violet-200 dark:bg-violet-200 dark:text-purple-900">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Paciente
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Fecha
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Hora
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-purple-100 border-b dark:bg-gray-100 dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-200">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Leonardo Padrón
                        </th>
                        <td class="px-6 py-4">
                            21/03/2023
                        </td>
                        <td class="px-6 py-4">
                            12:00
                        </td>
            
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>

                    <tr class="bg-purple-100 border-b dark:bg-gray-100 dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-200">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Alejandro Abrodos
                        </th>
                        <td class="px-6 py-4">
                            21/01/2024
                        </td>
                        <td class="px-6 py-4">
                            11:00
                        </td>
                       
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <br></br>

        </React.Fragment>

    )
}