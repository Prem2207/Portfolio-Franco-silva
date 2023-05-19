import React from 'react'

const Project = () => {
    return (
        <section id="Project" className='grid justify-center py-16 max-w-screen-2xl  '>
            <h3 className='text-white p-3 font-bold  text-3xl lg:text-[48px] md:mr-[350px]'>
                <span className='text-violet'>Last landing </span>
                and website projects</h3>
            {/* Proyectos con img, link y descripcion */}
            <section className=' md:grid md:gap-16 py-10 '>
                {/* weatherapp */}
                <section className='p-4 md:flex md:justify-evenly md:gap-10'>
                    <div className='rounded-[20px]  bg-gray-950 w-[300px] h-[200px] 
                    grid justify-center justify-items-center mx-auto md:w-[550px] md:h-[350px] '>
                        <img className='rounded-[20px] w-[290px] h-[190px] pt-3 px-2
                        md:w-[550px] md:h-[350px] md:pb-3' src="/images/weatherApp.png" alt="" />
                    </div>
                    <div className='text-white py-6 max-w-sm grid text-center md:w-[400px] '>
                        <h3 className='text-violet text-2xl md:text-4xl'>Weather App</h3>
                        <h4>Description: WeatherApp is an application that will tell you the weather in your city. It is made with the <span className='text-violet text-2xl'>ReactJs</span> library, using hooks such as useEffect to consume an API and useState, for the design use <span className='text-violet text-2xl'>CSS</span> looking for a harmonious and user-friendly design.</h4>
                        <a className='text-violet' target='_blank' href="https://shiny-maamoul-c166f9.netlify.app/">Go to app!!</a>
                    </div>
                </section>

                {/* userlist */}
                <section className='p-4 md:flex md:justify-evenly md:flex-row-reverse md:gap-10'>
                    <div className='rounded-[20px]  bg-gray-950 w-[300px] h-[200px]
                    grid justify-center justify-items-center mx-auto md:w-[550px] md:h-[350px]'>
                        <img className='rounded-[20px] w-[290px] h-[190px] pt-3 
                        px-2 md:w-[550px] md:h-[350px] md:pb-3' src="/images/userList.png" alt="" />
                    </div>
                    <div className='text-white py-6 max-w-sm grid text-center md:gap-1 md:w-[400px]'>
                        <h3 className='text-violet text-2xl md:text-4xl'>UserList</h3>
                        <h4>Description:UserList is an app that you can use a modal to get, create, update and delete users. It is made with <span className='text-violet text-2xl'>ReactJs</span> consuming an <span className='text-violet text-2xl'>API</span>, <span className='text-violet text-2xl'>CRUD</span> and the <span className='text-violet text-2xl'>React-hook-form</span> library are used to manage forms. For styling I use <span className='text-violet text-2xl'>Tailwindcss</span>.</h4>
                        <a className='text-violet' target='_blank' href="https://charming-daifuku-968476.netlify.app/">Go to app!!</a>
                    </div>
                </section>
                {/* pokedex */}
                <section className='p-4  md:flex md:justify-evenly md:gap-16'>
                    <div className='rounded-[20px]  bg-gray-950 w-[300px] h-[200px]
                    grid justify-center justify-items-center mx-auto md:w-[550px] md:h-[350px]'>
                        <img className='rounded-[20px] w-[290px] h-[190px] pt-3 px-2 
                        md:w-[550px] md:h-[350px] md:pb-3' src="/images/pokedex.png" alt="" />
                    </div>
                    <div className='text-white max-w-sm py-6 grid text-center md:w-[400px]'>
                        <h3 className='text-violet text-2xl md:text-4xl'>Pokedex</h3>
                        <h4>Description: 
Pokedex is an app that will allow you to view more than 1000 pokemons with their image and descriptions. allows you to search and filter by types. It is made with <span className='text-violet text-2xl'>ReactJs</span> getting the pokemons through an <span className='text-violet text-2xl'>API</span> using the <span className='text-violet text-2xl'>React-Router-Dom</span> library for routing and <span className='text-violet text-2xl'>Redux</span> for managing global states. For the design I use <span className='text-violet text-2xl'>tailwindcss</span> with a friendly and responsive design.</h4>
                        <a className='text-violet' target='_blank' href="https://clinquant-entremet-d4c67b.netlify.app">Go to app!!</a>
                    </div>
                </section>

            </section>



        </section>
    )
}

export default Project