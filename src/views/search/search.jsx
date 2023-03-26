import React from 'react'
import Lista from '../../components/ListaDoctores'

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

        <Lista/>
        
        <br></br>

        </React.Fragment>

    )
}