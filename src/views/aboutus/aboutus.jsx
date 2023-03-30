import React from 'react'
import psicologos from '../../assets/psicologos.jpg'
import deposito from '../../assets/deposito.jpeg'

export default function Aboutus() {
  return (

    <React.Fragment>
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6" />
        <div class="font-light text-purple-800 sm:text-lg dark:text-black">
          <h2 class="mb-4 text-6xl text-violet-900 font-bold text-gray-900 text-violet-900 ml-4">Somos Aura</h2>
          <p class=" ml-8 mb-4">Aura, la app de terapia psicológica que cuida de ti a donde vayas Encuentra doctores y espcialistas en linea, con la mejor atención psicológica en línea. Todo en un solo lugar. Obtén la estabilidad emocional que necesitas para tu vida diaria. Habla hoy de forma segura y privada con un psicólogo en línea.</p>
          <p className="ml-8 ">Aura es una plataforma de terapia psicológica en línea segura y económicamente accesible. Nuestra misión es ayudar a las personas a recuperar la estabilidad emocional que necesitan para su vida diaria. Tenemos en nuestra red muchísimos psicólogos con diferentes enfoques terapéuticos y cada uno enfocado en áreas de atención muy diversas. Las sesiones se llevan a cabo a través del chat, por lo que puedes estar desde cualquier parte del mundo tomando terapia. En Aura, puedes hablar de forma segura y privada con un psicólogo de confianza por el chat a través de nuestra plataforma. Para tener una consulta en línea con alguno de nuestros psicólogos, tienes que agendar previamente una cita. La disponibilidad de horario varía de acuerdo a la agenda del psicólogo que selecciones..</p>
        </div>

        <div class="grid grid-cols-2 gap-4 mt-8">
          <img class="w-full rounded-lg" src={psicologos} alt="office content 1" />
          <img class="mt-4 w-full lg:mt-10 rounded-lg" src={deposito} alt="office content 2" />
        </div>
      </section>
    </React.Fragment>
  )
}
