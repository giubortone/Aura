import React, { useState } from 'react'
import { getDatabase, ref, get, query, orderByKey, orderByChild, equalTo } from "firebase/database";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import Combobox from 'react-widgets/Combobox';
import { Link } from "react-router-dom";
import "react-widgets/styles.css";


const Lista = () => {

    const [user, setUser] = useState(null);
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setUser(currentUser);
        } else {
            console.log('ningun')
        }
    });

    const [data, setData] = useState([]);
    const [dataFiltrada, setDataFiltrada] = useState([]);
    const [filtroEspecialidad, setFiltroEspecialidad] = useState('');
    const [especialidades, setEspecialidades] = useState([]);
    if (data.length == 0 && user) getData();
    function getData() {
        const db = getDatabase();
        get(query(ref(db, 'citas/'), orderByChild('id_usuario'), equalTo(user.uid))).then((snapshot) => {
            let records = [];
            if (snapshot.exists()) {

                console.log(snapshot.val());
                snapshot.forEach((citasSnapshot) => {
                    let keyName = citasSnapshot.key;
                    let citas = citasSnapshot.val();
                    records.push({ "key": keyName, "data": citas });
                });
                setData(records);
                setDataFiltrada(records);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
   

    return (

        <><div>
            <h1 className='ml-8'>Citas</h1>

            <br></br>

            <label for="default-search" className="mb-2 text-sm font-medium sr-only">Search</label>



            <br></br>

        </div><div class="relative overflow-x-auto sm:rounded-lg flex justify-center">

                <table class="w-10/12 text-sm text-left border ">
                    <thead class="text-xs text-gray-700 uppercase bg-violet-200 dark:bg-violet-200 dark:text-purple-900">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Doctor
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Fecha
                            </th>

                        </tr>
                    </thead>
                    <tbody>

                        {data.length > 0 ? dataFiltrada.map((citaSnapshot, i) => (

                            <tr key={i} class="bg-purple-100 border-b dark:bg-gray-100 dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-200">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {citaSnapshot.data.nm_doctor}
                                </th>
                                <td class="px-6 py-4">
                                    {citaSnapshot.data.fecha}
                                </td>


                            </tr>
                        )) : <p>Cargando</p>}
                    </tbody>
                </table>
            </div></>

    )
}


export default Lista
