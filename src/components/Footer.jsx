import React from 'react'

const Footer = () => {
    return (
        <section className='p-3 py-10 bg-black max-w-screen-2xl'>
            <article className='grid grid-cols-2 md:max-w-[900px] md:mx-auto  '>
                {/* Nombre y redes */}
                <section className='grid justify-start md:flex md:gap-4'>
                    
                    <h2 className='text-white font-bold text-2xl'>S.FRANCO</h2>
                   
                    <div className='flex gap-2'>

                    <a href="https://wa.me/543816196211" target='_blank'><i className=' text-3xl text-violet bx bxl-whatsapp'></i></a>
                    <a href='https://linkedin.com/in/franco-gabriel-silva/' target='_blank'><i className=' text-3xl text-violet bx bxl-linkedin-square' ></i></a>
                    <a href='https://github.com/' target='_blank'><i className=' text-3xl text-violet bx bxl-github'></i> </a>
                        
                    
                    </div>
                </section>

                {/* Link */}
                <section className='text-white grid gap-1 justify-end md:flex md:gap-6  '>
                <a href="#Header">Home</a>
                <a href="#Project">Project</a>
                <a href="#AboutMe">About me</a>
                <a href="#Contact">Contact me</a>
                </section>
            </article>
        </section>
    )
}

export default Footer