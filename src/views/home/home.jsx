import React from "react";
import Card from "../../components/Card";
import foto from '../../assets/photo-3.png';
import osmedkitoutline from '../../assets/ios-medkit-outline.png'
import ioshomeoutline from '../../assets/ios-home-outline.png'
import somos from '../../assets/SOMOS SIGNATARIOS DE LA O,,,NU 1.png'
import counter from '../../assets/Counter.png'
import grey from '../../assets/Grey Untangled Thoughts Mental Health Clinic Logo 1.png'
import vector from '../../assets/Vector 8.png'
import fondo from '../../assets/Imagen de fondo.png'
import { NavLink } from 'react-router-dom'
export default function Home() {
  const testimonials = [
    {
      name: "Jose Luis Guerrero",
      review:
        "Mi salud mental es tan importante como mi salud física pero mi trabajo como piloto me impide asistir a consultas periódicamente y Aura es mi mejor aliado con eso.",
      date: "12/3/23",
    },

    {
      name: "Enrique Ferreira",
      review:
        "Mi Dr me ha enseñado otra perspectiva de los psicólogos, tengo 73 años y siempre pensé que era para locos jeje.",
      date: "12/01/23",
    },

    {
      name: "Maria Sanchez",
      review:
        "Aura es una ayuda increíble, mi dra es mi guía para tomar decisiones.",
      date: "09/2/23",
    },
  ];

  return (
    <React.Fragment>
      <div className="flex justify-between items-center bg-gray-100">
        <div className="flex-col items-center ml-24">
          <h1 className="text-3xl mb-4 font-bold">
            Descubre psicólogos en linea
          </h1>
          <h2 className="text-xl">
            Tu salud mental es lo más importante, una <br /> mente sana hace un
            cuerpo sano
          </h2>{" "}
          <br />
          <div className="">

            <NavLink className="bg-purple-900 rounded-lg p-2 px-4 text-white ml-4" to={'/register'}>Saber mas</NavLink>


            <NavLink className="bg-purple-900 rounded-lg p-2 px-4 text-white ml-4" to={'/register'}>Pedir cita </NavLink>
          </div>
        </div>

        <div>
          <img className="" src={foto} alt="img1" />
        </div>
      </div>

      <div className="bg-purple-900 text-center font-bold text-white p-2 mb-24">
        Psicólogos a tu alcance con un click
      </div>
      <div className="flex justify-evenly mt-8">
        <div>
          <div className="flex justify-center items-center">
            <img className="" src={counter} alt="img2" />
            <h2 className="font-bold text-2xl ml-6 text-violet-900">
              Registrate <br /> Gratis
            </h2>
          </div>
          <div className="mt-3 flex text-center">
            {" "}
            Registrate y revisa nuestra amplia lista de <br /> doctores, elige
            el que te inspire mas <br /> confianza{" "}
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center">
            <img
              className=""
              src={ioshomeoutline}
              alt="img2"
            />
            <h2 className="font-bold text-2xl ml-6 text-violet-900">
              Pide tu cita <br className="text-black" /> 100% online
            </h2>
          </div>
          <div className="mt-3 flex text-center">
            {" "}
            Elige la hora y el día que mejor se adapte <br /> a tu rutina{" "}
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center">
            <img
              className=""
              src={osmedkitoutline}
              alt="img2"
            />
            <h2 className="font-bold text-2xl ml-6  text-violet-900 ">
              {" "}
              Ten tu primera <br /> Terapia{" "}
            </h2>
          </div>
          <div className="mt-3 flex text-center">
            {" "}
            Conéctate a tu consulta psicológica a través <br /> de Aura y
            empieza a cambiar tu vida.{" "}
          </div>
        </div>
      </div>

      <div className="mt-24">
        <img
          className="absolute z-0 opacity-80"
          src={somos}
          alt="img-3"
        />
        <div className=" relative z-5 flex justify-end grid mr-24">
          <h1 className="font-bold text-5xl mt-24">
            {" "}
            ¿Eres psicólogo? <br />
          </h1>
          <p className="mt-7 text-xl mb-8">
            Tendrás un espacio en el cual personas que <br /> requieren de tus
            servicios podrán agendar citas <br /> contigo según tu agenda de
            disponibilidad.{" "}
          </p>
          <p className="mb-10"> Con Aura tendrá acceco a:</p>

          <div className="flex justify-around space-x-2">
            <h4 className="border border-black w-1/3 text-center rounded-lg bg-purple-900 text-white">
              {" "}
              Feedback
            </h4>
            <h4 className="border border-black w-1/3 text-center rounded-lg bg-purple-900 text-white">
              {" "}
              Chat 24 horas{" "}
            </h4>
            <h4 className="border border-black w-1/3 text-center rounded-lg bg-purple-900 text-white">
              {" "}
              Confiabilidad{" "}
            </h4>
          </div>
        </div>
      </div>
      <div className="mt-64 relative z-0 bg-purple-900 p-4"></div>

      <div className="flex justify-between items-center bg-gray-100">
        <div className="flex justify-start grid ml-24">
          <h1 className="font-bold text-4xl">
            {" "}
            Conoce a nuestros profesionales <br />
          </h1>
          <p className="mt-7 text-xl mb-8">
            Tendrás un espacio en el cual personas que <br /> requieren de tus
            servicios podrán agendar citas <br /> contigo según tu agenda de
            disponibilidad.{" "}
          </p>
          <p className="mb-10 font-bold text-3xl ">
            {" "}
            Con Aura puedes buscar a los mejores psicologos
          </p>
        </div>

        <img
          className="mt-0"
          src={grey}
          alt="img4"
        />
      </div>

      <div className="bg-purple-900 h-24 flex justify-evenly items-center">
        <div>
          <div className="flex justify-center items-center space-x-40">
            <div>
              <h1 className="font-bold text-4xl text-white"> 24/7</h1>
              <p className="text-white"> Soporte online</p>
            </div>
            <img src={vector}alt="" />
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center space-x-40">
            <div>
              <h1 className="font-bold text-4xl text-white">100+</h1>
              <p className="text-white">Doctores</p>
            </div>
            <img src={vector} alt="" />
          </div>
        </div>

        <div className="text-center">
          <h1 className="font-bold text-4xl text-white">1000+</h1>
          <p className="text-white">Pacientes</p>
        </div>
      </div>

      <img
        className="absolute z-0"
        src={fondo}
        alt=""
      />
      <div className=" relative z-10 bg-amber-300 h-32 rounded-3xl mt-48 mb-40 mr-20 ml-20 text-white">
        <h1 className="font-bold text-4xl ml-3.5 py-4">
          ¿Estás listo para tu primera terapia?
        </h1>
        <p className="ml-5">
          Habla hoy de forma segura y privada con un psicólogo online.
        </p>
      </div>

      <div className="bg-purple-900 text-white font-bold text-3xl h-20 mb-8">
        <h1 className="px-11 py-4">Lo que opinan nuestros pacientes</h1>
      </div>

      <div className="flex justify-center mb-8 ">
        {testimonials.map((element, i) => (
          <Card data={element} key={i} />
        ))}
      </div>
    </React.Fragment>
  );
}
