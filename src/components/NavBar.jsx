//NavBar
import luxi from '../assets/luxi.png'
import { auth } from '../firebase';
import React, { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';



const NavBarr = () => {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      console.log('ningun')
    }
  });

  const signOut = (e) => {
    auth.signOut().then(() => {
      setUser(null);

    }).catch((err) => {
      console.log(err);
    })
  }
  console.log(user)
  return (

    <nav class="p-3 text-violet-900 ">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <h6
          class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
          <a href="/">
            <img className='' src={luxi} alt='logo' />
          </a>
          Aura

        </h6>
        <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul class="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a href="./" class="block py-2 pl-3 pr-4 text-purple-900 bg-blue-700 rounded md:bg-transparent md:text-purple-900 md:p-0 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
            </li>
            {user ?
              <li>
                <a href="./search" class="block py-2 pl-3 pr-4 text-purple-900 bg-blue-700 rounded md:bg-transparent md:text-purple-900 md:p-0 dark:bg-blue-600 md:dark:bg-transparent">Doctores</a>
              </li>
              : null}
            {!user ?
              <li>
                <a href="./register" class="block py-2 pl-3 pr-4 text-purple-900 bg-blue-700 rounded md:bg-transparent md:text-purple-900 md:p-0 dark:bg-blue-600 md:dark:bg-transparent">Registrarse</a>
              </li>
              : null}
            {!user ?
              <li>
                <a href="./login" class="block py-2 pl-3 pr-4 text-purple-900 bg-blue-700 rounded md:bg-transparent md:text-purple-900 md:p-0 dark:bg-blue-600 md:dark:bg-transparent">Iniciar sesión</a>
              </li>
              : null}
            {user ? <li>
              <button onClick={signOut} className='bg-purple-900 rounded-full p-2 px-20 text-white ml-11 flex justify-center'>
                Salir
              </button>
            </li> : null}
          </ul>
        </div>
      </div>
    </nav>


  );
}

export default NavBarr;