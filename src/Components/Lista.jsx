import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import { getDatabase, ref, get, child } from "firebase/database";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';



const Lista = () => {
    var data = [''];
    var dataInfo = [];
    const [doctores, setDoctores] = useState([]);
    //const [data, setData] = useState('');
    function getData() {
        const dbRef = ref(getDatabase());
        get(child(dbRef, 'usuarios/doctores/')).then((snapshot) => {
            if (snapshot.exists()) {
                data = snapshot;
                data.forEach((bookingSnapshot) => {
                    var booking = bookingSnapshot.val();
                    dataInfo.push(booking);
                    console.log(booking.username);
                });
                return dataInfo;
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    function RenderResult() {
        const [apiResponse, setApiResponse] = useState("*** now loading ***");
      
        useEffect(() => {
            getData().then(
                result => setApiResponse(result));
        },[]);
      
        return(
            <div>
                <h1>React App</h1>
                <p>{apiResponse.username}</p>
            </div>
        );
      };
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
                    <RenderResult/>


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
                            <svg class="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" />  <path d="M10 10l4 4m0 -4l-4 4" /></svg>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Lista