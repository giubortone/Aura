import React from 'react'
 export default function Home() {
    return(
        <React.Fragment>
            <div className="flex justify-between items-center bg-gray-100">
                <div className='flex flex-col items-center ml-24'>
                   <h1 className='text-3xl mb-4 font-bold'>Descubre psicologos en linea</h1> 
                   <h2 className='text-xl'>Tu salud mental es lo más importante, una <br/> mente sana hace un cuerpo sano</h2> <br/>
                    <div className="">
                        <button  className='bg-violet-900 rounded-lg p-2 px-4  text-white mr-4'>Saber mas</button>

                        <button   className='bg-violet-900 rounded-lg p-2 px-4 text-white ml-4'>Pedir cita</button>
                    
                    </div>
                </div>

                <div><img className='' src='src\assets\photo-3 1.png' alt='img1'/></div>
            </div>

            <div className='bg-violet-900 text-center font-bold text-white p-2 mb-24'>Psicólogos a tu alcance con un click</div>
            <div className='flex justify-evenly mt-8'>
                <div>
                    <div className='flex justify-center items-center'> 
                        <img className='' src='src\assets\Counter.png' alt='img2' />
                        <h2 className='font-bold text-2xl ml-6'>Registrate <br/> Gratis</h2>
                    </div>
                    <div className='mt-3 flex text-center'> Registrate y revisa nuestra amplia lista de <br /> doctores, elige el que te inspire mas <br /> confianza </div>
                </div>

                <div >
                    <div className='flex justify-center items-center'> 
                        <img className='' src='src\assets\Counter.png' alt='img2' />
                        <h2 className='font-bold text-2xl ml-6'>Pide tu cita <br/> Gratis</h2>
                    </div>
                    <div className='mt-3 flex text-center'> Registrate y revisa nuestra amplia lista de <br /> doctores, elige el que te inspire mas <br /> confianza </div>
                </div>

                <div>
                    <div className='flex justify-center items-center'> 
                        <img className='' src='src\assets\Counter.png' alt='img2' />
                        <h2 className='font-bold text-2xl ml-6'> Pide tu cira <br/> Gratis</h2>
                    </div>
                    <div className='mt-3 flex text-center'> Registrate y revisa nuestra amplia lista de <br /> doctores, elige el que te inspire mas <br /> confianza </div>
                </div>
            </div>
            
            <div className='mt-24'>
                <img className="absolute z-0 opacity-80" src="src\assets\SOMOS SIGNATARIOS DE LA O,,,NU 1.png" alt="img-3" />
                <div className=' relative z-5 flex justify-end grid mr-24' >
                    <h1 className='font-bold text-5xl mt-24' >  Eres psicologo? <br /></h1>  
                    <p className='mt-7 text-xl mb-8'>Tendrás un espacio en el cual personas que <br /> requieren de tus servicios podrán agendar citas <br /> contigo según tu agenda de disponibilidad. </p>
                    <p className='mb-10'> Con Aura tendrá acceco a:</p>

                    <div className='flex justify-around space-x-2'>
                        <h4 className='border border-black w-1/3 text-center rounded-lg bg-violet-900 text-white'> Feedback</h4>
                        <h4 className='border border-black w-1/3 text-center rounded-lg bg-violet-900 text-white'> Chat 24 horas </h4>
                        <h4 className='border border-black w-1/3 text-center rounded-lg bg-violet-900 text-white'> Confiabilidad </h4>
                    </div>
                </div>
            </div>
            <div className='mt-64 relative z-0 bg-violet-900 p-4'></div>

            <div className='flex justify-between items-center bg-gray-100'>
                <div className='flex justify-start grid ml-24'>
                    <h1 className='font-bold text-4xl' > Conoce a nuestros profesionales <br /></h1>  
                    <p className='mt-7 text-xl mb-8'>Tendrás un espacio en el cual personas que <br /> requieren de tus servicios podrán agendar citas <br /> contigo según tu agenda de disponibilidad. </p>
                    <p className='mb-10'> Con Aura puedes buscar a los mejores psicologos:</p>
                </div>
                
                <img className='mt-0' src="src\assets\Grey Untangled Thoughts Mental Health Clinic Logo 1.png" alt="img4" />
            </div>

            <div className='bg-violet-900 h-24 flex justify-evenly items-center' >
                <div>
                    <div className='flex justify-center items-center space-x-40'>
                        <div>
                            <h1 className='font-bold text-4xl text-white'> 24/7</h1>
                            <p className='text-white'> Soporte online</p>
                        </div>
                        <img src="src\assets\Vector 8.png" alt="" />
                       
                    </div>
                </div>

                <div>
                    <div className='flex justify-center items-center space-x-40'>
                        <div>
                            <h1 className='font-bold text-4xl text-white'>100+</h1>
                            <p className='text-white'>Doctores</p>
                        </div>
                        <img src="src\assets\Vector 8.png" alt="" />
                        </div>

                 
                </div>

                <div className='text-center'>
                    <h1 className='font-bold text-4xl text-white'>1000+</h1>
                    <p className='text-white'>Pacientes</p>
                </div>
            </div>

            <img className='absolute z-0' src="src\assets\Imagen de fondo.png" alt="" />
            <div className=' relative z-10 bg-amber-300 h-32 rounded-3xl mt-48 mb-40 mr-20 ml-20 text-white'>
                <h1 className='font-bold text-4xl ml-3.5 py-4'>¿Estás listo para tu primera terapia?</h1>
                <p className='ml-5'>Habla hoy de forma segura y privada con un psicólogo online.</p>
            </div>
            

            <div className='bg-violet-900 text-white font-bold text-3xl h-20'>
                <h1 className='px-11 py-4'>Lo que opinan nuestros pacientes</h1>
            </div>










        
           
        </React.Fragment>
    )
}