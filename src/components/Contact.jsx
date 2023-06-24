import React from 'react'
import emailjs from '@emailjs/browser';
import swal from "sweetalert"
export const Contact = () => {
    const showAlert = () => {
        swal({
            title:"Your message has been sent and received!!",
            text:"Thank you very much for your message, it will be answered as soon as possible.",
            icon:"success",
            button:"accept"
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        emailjs.sendForm(
        import.meta.env.VITE_APP_SERVICE_ID, 
        import.meta.env.VITE_APP_TEMPLATE_ID, 
        e.target,
        import.meta.env.VITE_APP_PUBLIC_KEY
         )
        .then((res)=>console.log(res.text))
        .catch((err)=>console.log(err.text))
    }
    return (
        <section id='Contact'  className='p-3 max-w-screen-2xl text-white md:max-w-[900px]  md:pl-[100px]'>
            <section className=' '>
            <h2 className='text-white  font-bold  text-3xl lg:text-[48px] md:mr-[350px]'>
                <span className='text-violet'>let’s</span> talk business
            </h2>
            <p className=' py-3 text-[14px] lg:w-[400px] lg:[70px]'>
                now thak you know a lot about me, let me know if
                you are interested to
                work with me.
            </p>
            </section>
           

            <form onSubmit={handleSubmit} className='grid gap-4 my-5'>
                <div className='grid gap-1 '>
                    <label htmlFor="name">Name</label>
                    <input className='bg-gray-20 text-white rounded-[5px]' 
                    name='from_name' id='name' type="text" />
                </div>

                <div className='grid gap-1 '>
                    <label htmlFor="email">Email</label>
                    <input className='bg-gray-20 text-white rounded-[5px]' 
                    name='email' id='email' type="text" />
                </div>

                <div className='grid gap-1 '>
                    <label htmlFor="message">Message</label>
                    <textarea className='bg-gray-20 text-white rounded-[5px]' 
                    name='message' id="message" rows="10"></textarea>
                </div>
                <div className='  items-center mx-auto border-white border-[2px] 
            rounded-[10px] max-w-max'>
                <button onClick={()=>showAlert()} className='text-white text-[14px] 
                font-semibold p-2 '>LET’ GET STARTED</button>
                </div>
                
            </form>
        </section>
    )
}
