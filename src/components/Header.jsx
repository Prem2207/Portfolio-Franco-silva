import React from 'react'

const Header = () => {
    return (
        <section id="Header" className='p2 py-12 mt-[50px] max-w-screen-2xl'>
            {/* SECTION IMG */}
            <section className='flex justify-center '>
                <img className=' lg:z-20 lg:absolute lg:pt-[60px] lg:w-[450px] lg:h-[450px]
                lg:ml-[450px] ' src="/images/robot.png" alt="" />
            </section>

            {/*SECTION TEXT Y BUTTON*/}
            <section className='text-white p-3 lg:pl-[100px]'>
                <h3 className='font-bold text-3xl lg:text-[48px] lg:w-[500px]  lg:pt-[180px]'>
                    <span className='text-violet'>Hi! </span>
                    I’am a
                    Front end
                    developed.
                </h3>
                <p className='py-2 lg:w-[400px] lg:[70px]'>I’m probably the most passionate developer
                    you will ever get to work with. If you have a
                    great project that needs some amazing skills,
                    I’m your guy.</p>



                <div className=' flex items-center m-3 border-white border-[2px] w-[100px] h-[25px]
            rounded-[10px] lg:ml-[100px] '>
                    <button className='text-white text-[14px] 
                font-semibold p-3 '>
                        Click here
                    </button>
                </div>


            </section>
            <section className='flex justify-center p-2 lg:mt-12 '>
                <section className='w-[220px] h-[900px] bg-gray-950 
                  rounded-[20px] grid gap-4 justify-center justify-items-center 
                pt-4 lg:pt-3 text-center text-[14px] lg:w-[900px] lg:h-[220px] lg:flex '>

                    <div className='rounded-[20px] bg-gray-20 w-[200px] h-[200px] '>
                    <i className='bx bxl-javascript text-violet text-6xl pt-8 '></i>
                        <h3 className='text-white p-2'>knowledge of Variables, functions, Object, arrays, Etc...

                        </h3>
                    </div>

                    <div className='rounded-[20px] bg-gray-20 w-[200px] h-[200px]   '>
                    <i className='bx bxl-react text-violet text-6xl pt-8' ></i>
                        <h3 className='text-white p-2'>knowledge of Redux, Hooks, Apis, CRUD, React-Router-Dom and much more...</h3>
                    </div>

                    <div className='rounded-[20px] bg-gray-20 w-[200px] h-[200px]   '>
                    <i className='bx bxl-css3 text-violet text-6xl pt-8' ></i>
                        <h3 className='text-white p-2'>knowledge of Tailwind css, Margin, Padding, Display flex y grid, Etc...</h3>
                    </div>

                    <div className='rounded-[20px] bg-gray-20 w-[200px] h-[200px]  '>
                    <i className='bx bxl-html5 text-violet text-6xl pt-8' ></i>
                        <h3 className='text-white p-2'>knowledge of Class, Div, Form, Link, IMG, and much more...</h3>
                    </div>
                </section>
            </section>

        </section>
    )
}

export default Header
