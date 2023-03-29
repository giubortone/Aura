import React, { useState } from 'react'
import { getDatabase, ref, get, child, query, limitToLast, orderByKey, equalTo, orderByChild } from "firebase/database";
import Combobox from 'react-widgets/Combobox';
import "react-widgets/styles.css";


const Lista = () => {


    const [data, setData] = useState([]);
    const [nombreDoctor, setNombreDoctor] = useState('');
    const [especialidad, setEspecialidad] = useState('');
    const [dataFiltrada, setDataFiltrada] = useState([]);
    const [filtroEspecialidad, setFiltroEspecialidad] = useState('');
    const [especialidades, setEspecialidades] = useState([]);
    if (data.length == 0) getData();
    function getData() {
        const db = getDatabase();
        get(query(ref(db, 'usuarios/doctores/'), orderByKey())).then((snapshot) => {
            let records = [];
            if (snapshot.exists()) {
                snapshot.forEach((doctoresSnapshot) => {
                    let keyName = doctoresSnapshot.key;
                    let doctores = doctoresSnapshot.val();
                    records.push({ "key": keyName, "data": doctores });

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
    if (especialidades.length == 0) getEspecialidad();
    function getEspecialidad() {
        const db = getDatabase();
        //const dbRef = ref(getDatabase());
        get(query(ref(db, 'especialidades/'), orderByKey())).then((snapshot) => {
            let records = [];
            records.push({ id: null, name: 'Todas' });
            if (snapshot.exists()) {
                snapshot.forEach(function (especialdadSnapshot) {
                    let especialidad = especialdadSnapshot.val();
                    var especialidadJson = {
                        id: especialidad.id,
                        name: especialidad.name
                    };
                    records.push(especialidadJson);
                });
                setEspecialidades(records);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    function filtrarEspecialidad(value) {
        setFiltroEspecialidad(value);
        let records = [];
        if (value.id != null) {
            console.log(dataFiltrada);
            records = data.filter(doc => doc.data.especialidad == value.id);
        } else {
            records = data;
        }
        setDataFiltrada(records);

    }

    return (

        <><div>
            <h1 className='ml-8'>Doctores</h1>

            <br></br>

            <label for="default-search" className="mb-2 text-sm font-medium sr-only">Search</label>
            <div className="relative bg-violet-100 ">
                <br></br>
                <Combobox
                    data={especialidades}
                    value={filtroEspecialidad}
                    textField='name'
                    onChange={value => filtrarEspecialidad(value)}
                />



                {false &&
                    <><div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div><input type="search" id="default-search"

                        className="ml-12 block w-4/12 p-3 pl-10 text-sm border  rounded-lg bg-neutral-200 focus:ring-white focus:white dark:bg-white dark:border-violet-100 dark:placeholder-purple-900 dark:focus:ring-blue-200 dark:focus:border-blue-200" placeholder="Buscar por doctor"
                        onChange={(e => {
                            setNombreDoctor(e.target.value);
                            filtrarEspecialidad();
                        })} />
                        <button className="text-purple-900 absolute right-2.5 bottom-6 bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-bg-purple-900 font-medium rounded-lg text-sm px-10 py-2 dark:bg-bg-purple-900  dark:hover:bg-bg-purple-900  dark:focus:ring-white mr-auto">Filtrar</button>
                    </>}

                <br></br>
            </div>


            <br></br>

        </div><div class="relative overflow-x-auto sm:rounded-lg flex justify-center">

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

                        {data.length > 0 && especialidades.length > 0 ? dataFiltrada.map((doctorSnapshot, i) => (

                            <tr key={i} class="bg-purple-100 border-b dark:bg-gray-100 dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-200">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {doctorSnapshot.data.username}
                                </th>
                                <td class="px-6 py-4">
                                    {especialidades[doctorSnapshot.data.especialidad].name}
                                </td>
                                <td class="px-6 py-4">
                                    {doctorSnapshot.data.edad}
                                </td>

                                {doctorSnapshot.data.disponible ?
                                    <td class="px-6 py-4">
                                        <svg class="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </td> : <td class="px-6 py-4">
                                        <svg class="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" />  <path d="M10 10l4 4m0 -4l-4 4" /></svg>
                                    </td>}
                            </tr>
                        )) : <p>Cargando</p>}
                    </tbody>
                </table>
            </div></>

    )
}


export default Lista
