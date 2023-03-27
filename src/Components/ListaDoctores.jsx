import React, { useState } from 'react'
import { getDatabase, ref, get, child } from "firebase/database";



const Lista = () => {


    const [data, setData] = useState([]);
    var arreglo = [];
    var prueba = [
        {
            nombre: "Samuel",
            apellido: "Moreno",
            edad: 18
        },
        {
            nombre: "Carlos",
            apellido: "Urrego",
            edad: 24
        }
    ]
    if (data.length == 0) getData();
    //const [data, setData] = useState('');
    async function getData() {
        const dbRef = ref(getDatabase());
        get(child(dbRef, 'usuarios/doctores/')).then((snapshot) => {
            if (snapshot.exists()) {
                snapshot.forEach((bookingSnapshot) => {
                    var booking = bookingSnapshot.val();
                    arreglo.push(booking);
                });
                setData(arreglo);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    if (data.length == 0) {
        return (
            <p>Cargando</p>
        )

    }
    return (
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

                    {
                        data.map((doctorSnapshot) => (

                            <tr class="bg-purple-100 border-b dark:bg-gray-100 dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-200">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {doctorSnapshot.username}
                                </th>
                                <td class="px-6 py-4">
                                    {doctorSnapshot.especialidad}
                                </td>
                                <td class="px-6 py-4">
                                    {doctorSnapshot.edad}
                                </td>

                                {doctorSnapshot.disponible ?
                                    <td class="px-6 py-4">
                                        <svg class="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </td> : <td class="px-6 py-4">
                                        <svg class="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" />  <path d="M10 10l4 4m0 -4l-4 4" /></svg>
                                    </td>
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}

export default Lista