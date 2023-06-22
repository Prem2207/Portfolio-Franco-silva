import React from "react";

export const AboutMe = () =>{
    return(
        <section id="AboutMe" className='p-3 lg:py-10 max-w-screen-2xl text-white md:max-w-[900px]  md:pl-[100px]'>
            <h3 className='text-white pb-2 lg:pb-10   font-bold  text-3xl lg:text-[48px] md:mr-[350px]'>
                <span className='text-violet'>About</span> me</h3>
            <p className='py-2 lg:w-[1200px] lg:[70px]'>Web programmer online career with constant search for continuous improvement!</p>
            <p className='py-2 lg:w-[1200px] lg:[70px]'>I started programming out of curiosity, today I am sure that it is my passion, where I want to continue developing myself and contribute all my ability.</p>
            <p className='py-2 lg:w-[1200px] lg:[70px]'>I have experience programming Front-end with javaScript using the React library and giving styles with CSS.</p>
            <p className='py-2 lg:w-[1200px] lg:[70px] mb-4'>I am a family person with a lot of empathy towards other people, friendly and with an impeccable morality.</p>
            
            <div className=' flex items-center  border-violet border-[3px] w-[145px] h-[25px]
            rounded-[10px]'>
                    <a href="../public/downloadableFiles/cv_franco_silva.docx" className='text-violet text-[18px] 
                font-bold p-3 '>
                        Download cv
                    </a>
                    
                </div>
        </section>
    )
}